#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
tools/seo_sync.py - Sentinel Game Academy

Regenerates the SEO-critical parts of every real content page:
  - root index.html
  - sentinel.html
  - games/<id>/index.html          (8 game hubs)
  - games/<id>/<NN-slug>.html      (149 chapter pages)

For each page it (re)writes, inside <!-- SEO:BEGIN --> / <!-- SEO:END -->
markers: meta description, <title>, rel=canonical, hreflang alternates
(it/en/es/fr + x-default) and, for hub pages only, the og:*/twitter:*
block. It also flips the static <html lang="it"> attribute to "en" and
makes sure <script src=".../data/seo.js"> is included in <body>.

Source of truth (never hand-edit the generated blocks, edit these
instead and re-run this script):
  - data/games.js  -> chapters[].title/.desc/.en.{title,desc}  (chapter pages)
  - data/seo.js    -> SEO.home / SEO.sentinel / SEO.games[id]  (hub pages)

Also (re)generates sitemap.xml and robots.txt from the same page list.

Never touches games/*/en.html or the root en.html (noindex redirect
stubs) - those are hand-written and out of scope for this script.

Idempotent: safe to re-run any time data/games.js or data/seo.js
changes (new game, new chapter, updated copy). Re-running with no
upstream changes must produce an empty git diff.

Usage:
    python tools/seo_sync.py           # write changes
    python tools/seo_sync.py --check   # dry run, exit 1 if anything would change
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE_URL = "https://br1greenhouse.github.io/SentinelGameAcademy"
LANGS = ["it", "en", "es", "fr"]

# ============================================================
# JS object/array literal -> JSON (string-literal-aware)
# ============================================================

# Two separate passes on purpose (not one combined regex): if a comment
# sits between a "," and the next key (e.g. `status: "published",   //
# comment\n    i18n: {`), stripping the comment and quoting the key in
# the same scan fails - the "," gets consumed as a non-match while the
# comment is in the way, so by the time the scanner reaches the key the
# preceding delimiter is already behind it. Stripping comments first
# guarantees only whitespace ever separates a delimiter from a key.
# The string alternative is always tried first, so real string content
# (e.g. a `// ...` prefix used as visible prose, like in data/i18n.js)
# is never mistaken for a comment or a key.
_STRIP_COMMENTS_RE = re.compile(
    r'(?P<str>"(?:[^"\\]|\\.)*")'
    r'|(?P<comment>//[^\n]*|/\*.*?\*/)',
    re.S,
)


def _strip_comment_token(m):
    if m.group("str") is not None:
        return m.group("str")
    return ""


_NORMALIZE_RE = re.compile(
    r'(?P<str>"(?:[^"\\]|\\.)*")'
    r'|(?P<keypre>[{,]\s*)(?P<keyname>[A-Za-z_$][A-Za-z0-9_$]*)(?P<keypost>\s*:)'
    r'|(?P<comma>,)(?P<trailws>\s*)(?P<trailbracket>[}\]])',
    re.S,
)


def _normalize_token(m):
    if m.group("str") is not None:
        return m.group("str")
    if m.group("keyname") is not None:
        return m.group("keypre") + '"' + m.group("keyname") + '"' + m.group("keypost")
    if m.group("trailbracket") is not None:
        return m.group("trailws") + m.group("trailbracket")
    return m.group(0)


def _extract_literal(source, var_name):
    """Return the raw '[...]' or '{...}' text assigned to `var <var_name> = `,
    using a string/comment-aware bracket-depth scan (regex alone can't do
    balanced-bracket matching)."""
    m = re.search(r"var\s+" + re.escape(var_name) + r"\s*=\s*", source)
    if not m:
        raise ValueError("var %s not found" % var_name)
    n = len(source)
    i = m.end()
    while source[i] not in "[{":
        i += 1
    start = i
    depth = 0
    in_str = None
    while i < n:
        c = source[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == in_str:
                in_str = None
            i += 1
            continue
        if c in "\"'":
            in_str = c
            i += 1
            continue
        if c == "/" and i + 1 < n and source[i + 1] == "/":
            nl = source.find("\n", i)
            i = nl if nl != -1 else n
            continue
        if c == "/" and i + 1 < n and source[i + 1] == "*":
            end = source.find("*/", i + 2)
            i = end + 2 if end != -1 else n
            continue
        if c in "[{":
            depth += 1
        elif c in "]}":
            depth -= 1
            if depth == 0:
                i += 1
                break
        i += 1
    return source[start:i]


def load_js_var(path, var_name):
    text = path.read_text(encoding="utf-8")
    raw = _extract_literal(text, var_name)
    no_comments = _STRIP_COMMENTS_RE.sub(_strip_comment_token, raw)
    normalized = _NORMALIZE_RE.sub(_normalize_token, no_comments)
    return json.loads(normalized)


# ============================================================
# HTML helpers
# ============================================================

def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def hub_url(gid):
    return "%s/games/%s/index.html" % (BASE_URL, gid)


def chapter_url(gid, file):
    return "%s/games/%s/%s" % (BASE_URL, gid, file)


def sentinel_url():
    return "%s/sentinel.html" % BASE_URL


def home_url():
    return "%s/" % BASE_URL


def hreflang_lines(self_url):
    lines = ['<link rel="canonical" href="%s">' % self_url]
    for l in LANGS:
        href = self_url if l == "en" else "%s?lang=%s" % (self_url, l)
        lines.append('<link rel="alternate" hreflang="%s" href="%s">' % (l, href))
    lines.append('<link rel="alternate" hreflang="x-default" href="%s">' % self_url)
    return lines


def hub_block_lines(self_url, entry, og_locale_map):
    en = entry["en"]
    lines = [
        '<meta name="description" content="%s">' % esc(en["description"]),
        "<title>%s</title>" % esc(en["title"]),
    ]
    lines += hreflang_lines(self_url)
    alt_locales = [og_locale_map[l] for l in LANGS if l != "en"]
    lines += ['<meta property="og:type" content="website">',
              '<meta property="og:site_name" content="Sentinel Game Academy">',
              '<meta property="og:locale" content="%s">' % og_locale_map["en"]]
    lines += ['<meta property="og:locale:alternate" content="%s">' % loc for loc in alt_locales]
    lines += ['<meta property="og:title" content="%s">' % esc(en["ogTitle"]),
              '<meta property="og:description" content="%s">' % esc(en["ogDescription"]),
              '<meta property="og:url" content="%s">' % self_url,
              '<meta name="twitter:card" content="summary">',
              '<meta name="twitter:title" content="%s">' % esc(en["ogTitle"]),
              '<meta name="twitter:description" content="%s">' % esc(en["ogDescription"])]
    return lines


def chapter_block_lines(self_url, chapter, game_name):
    en = chapter["en"]
    title = "%s – Guide for %s · Sentinel Game Academy" % (en["title"], game_name)
    lines = [
        '<meta name="description" content="%s">' % esc(en["desc"]),
        "<title>%s</title>" % esc(title),
    ]
    lines += hreflang_lines(self_url)
    return lines


# ---------- injection (idempotent, marker-based) ----------

# Leading [ \t]* so the match owns the original line's indentation too -
# otherwise it stacks with the indentation `_wrapped()` adds and grows a
# little more on every re-run (breaks idempotency).
MARKER_RE = re.compile(r'[ \t]*<!-- SEO:BEGIN -->.*?(?=<link rel="icon")', re.S)
HUB_FIRST_RE = re.compile(r'[ \t]*<meta name="description".*?(?=<link rel="icon")', re.S)
CHAPTER_FIRST_RE = re.compile(r'[ \t]*<title>.*?(?=<link rel="icon")', re.S)


def _wrapped(lines):
    body = "\n".join("  " + l for l in lines)
    return "  <!-- SEO:BEGIN -->\n" + body + "\n  <!-- SEO:END -->\n\n  "


def inject(html, lines, first_re):
    wrapped = _wrapped(lines)
    m = MARKER_RE.search(html)
    if not m:
        m = first_re.search(html)
    if not m:
        raise RuntimeError("no anchor found (expected <link rel=\"icon\"> in <head>)")
    return html[: m.start()] + wrapped + html[m.end():]


def flip_html_lang(html):
    return html.replace('<html lang="it"', '<html lang="en"', 1)


_INCLUDE_RE = re.compile(r'(?P<indent>[ \t]*)<script src="(?P<prefix>[^"]*?)data/i18n\.js"></script>\n')


def inject_seo_script(html):
    if "data/seo.js" in html:
        return html
    m = _INCLUDE_RE.search(html)
    if not m:
        raise RuntimeError("data/i18n.js <script> include not found")
    line = '%s<script src="%sdata/seo.js"></script>\n' % (m.group("indent"), m.group("prefix"))
    pos = m.end()
    return html[:pos] + line + html[pos:]


def process(path, lines_for_html, first_re):
    html = path.read_text(encoding="utf-8")
    original = html
    html = flip_html_lang(html)
    html = inject(html, lines_for_html, first_re)
    html = inject_seo_script(html)
    return html, html != original


# ============================================================
# sitemap.xml / robots.txt
# ============================================================

def build_sitemap(urls):
    items = "\n".join("  <url><loc>%s</loc></url>" % esc(u) for u in urls)
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + items
        + "\n</urlset>\n"
    )


def build_robots():
    return "User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n" % BASE_URL


# ============================================================
# Main
# ============================================================

def main():
    check_only = "--check" in sys.argv

    games = load_js_var(ROOT / "data" / "games.js", "GAMES")
    seo_path = ROOT / "data" / "seo.js"
    seo = load_js_var(seo_path, "SEO")
    og_locale_map = load_js_var(seo_path, "OG_LOCALE_MAP")

    changed = []
    sitemap_urls = [home_url(), sentinel_url()]

    def write(path, new_html, is_changed):
        if is_changed:
            changed.append(path)
        if not check_only:
            path.write_text(new_html, encoding="utf-8")

    # home
    p = ROOT / "index.html"
    lines = hub_block_lines(home_url(), seo["home"], og_locale_map)
    html, is_changed = process(p, lines, HUB_FIRST_RE)
    write(p, html, is_changed)

    # sentinel
    p = ROOT / "sentinel.html"
    lines = hub_block_lines(sentinel_url(), seo["sentinel"], og_locale_map)
    html, is_changed = process(p, lines, HUB_FIRST_RE)
    write(p, html, is_changed)

    for g in games:
        gid = g["id"]
        sitemap_urls.append(hub_url(gid))
        seo_g = seo["games"].get(gid)
        if not seo_g:
            raise RuntimeError("data/seo.js is missing SEO.games[%r]" % gid)

        p = ROOT / "games" / gid / "index.html"
        lines = hub_block_lines(hub_url(gid), seo_g, og_locale_map)
        html, is_changed = process(p, lines, HUB_FIRST_RE)
        write(p, html, is_changed)

        for c in g.get("chapters", []):
            url = chapter_url(gid, c["file"])
            sitemap_urls.append(url)
            p = ROOT / "games" / gid / c["file"]
            lines = chapter_block_lines(url, c, g["name"])
            html, is_changed = process(p, lines, CHAPTER_FIRST_RE)
            write(p, html, is_changed)

    # sitemap.xml
    sitemap_path = ROOT / "sitemap.xml"
    sitemap_xml = build_sitemap(sitemap_urls)
    sitemap_changed = (not sitemap_path.exists()) or sitemap_path.read_text(encoding="utf-8") != sitemap_xml
    if sitemap_changed:
        changed.append(sitemap_path)
    if not check_only:
        sitemap_path.write_text(sitemap_xml, encoding="utf-8")

    # robots.txt
    robots_path = ROOT / "robots.txt"
    robots_txt = build_robots()
    robots_changed = (not robots_path.exists()) or robots_path.read_text(encoding="utf-8") != robots_txt
    if robots_changed:
        changed.append(robots_path)
    if not check_only:
        robots_path.write_text(robots_txt, encoding="utf-8")

    print("URL nella sitemap: %d" % len(sitemap_urls))
    print("File %s: %d" % ("che cambierebbero" if check_only else "modificati", len(changed)))
    for p in changed:
        print(" -", p.relative_to(ROOT))

    if check_only and changed:
        sys.exit(1)


if __name__ == "__main__":
    main()
