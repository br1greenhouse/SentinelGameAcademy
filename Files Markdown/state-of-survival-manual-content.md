
# STATE OF SURVIVAL — Content Pack for Sentinel Game Academy

> **Purpose of this file:** raw content source for implementing the new "State of Survival" game sheet on Sentinel Game Academy, following the same field-manual style already used for the Age of Z Origins guide (hazard-stripe motif, amber/gunmetal palette, structured callout boxes). Content only — no HTML/site code. Organize each `##` section below as its own page/sub-page, and each `###` as a section within a page. Callout boxes are marked inline (see legend).

> **Callout box legend** (map these to the existing box components: Consiglio / Errore da evitare / Priorità / F2P / Avanzati):
> - `[TIP]` → Survivor Tip (equivalent to "Consiglio")
> - `[MISTAKE]` → Mistake to Avoid ("Errore da evitare")
> - `[PRIORITY]` → Priority
> - `[F2P]` → F2P Focus
> - `[ADVANCED]` → Advanced

> **Important editorial note before you build the page:** State of Survival (FunPlus/KingsGroup) uses its own terminology, distinct from Age of Z Origins, Whiteout Survival, Last Shelter: Survival, and Rise of Kingdoms. A few terms that sound familiar from those games do **not** exist in State of Survival under the same name — these are flagged with **[TERMINOLOGY]** notes throughout so nothing gets mixed up during implementation. Also, several exact numeric values (costs, percentages, capacities) come from community wikis that are periodically revised by balance patches — treat them as illustrative of scale/relative progression, and consider adding a small "values may vary by game version" disclaimer on the page footer, same as was likely done for Age of Z Origins.

---

## PAGE 1 — Game Overview

**State of Survival** is a mobile strategy / base-building game set during a zombie apocalypse, developed by FunPlus/KingsGroup. Players rebuild a settlement, train troops, recruit and develop heroes, research technology, and cooperate (or fight) with other players through alliances, all while fending off both the "Infected" (PvE zombie content) and rival players (PvP).

Core pillars:
- **Base building** around a central **Headquarters (HQ)**, which caps the level of every other building.
- **Resource management**: Food, Wood, Metal, and Gas, plus the premium currency **Biocaps**.
- **Troops**: three types (Infantry, Rider, Hunter) trained in dedicated buildings, upgraded through tiers (T1 to T12+).
- **Heroes**: collectible characters that lead marches, boost troops, and fight directly in the PvE "Explorer Trail" mode.
- **Alliances**: cooperative guilds that unlock shared tech, defense, and access to large-scale PvP events.
- **Events**: a dense rotating calendar of PvE and PvP competitions (Survival of the Fittest, Capital Clash, State vs State, Reservoir Raid, Doomsday Open, and more).

**[TIP]** Unlike Age of Z Origins' NRC alliance context, this sheet is written as a general-purpose reference — adapt the "alliance" framing to whichever alliance/community the Academy is writing for, the same way the AoZ guide was tailored to NRC.

---

## PAGE 2 — Getting Started (First Weeks Roadmap)

A condensed onboarding checklist for brand-new players, compiled from veteran/community advice:

1. **Rename your settlement immediately.** Default-named accounts are specifically targeted as easy farms by veteran players, and some alliances reject applications from un-renamed accounts on sight (they look inactive/bait).
2. **Bind your account** (Google Play / Game Center / Facebook login) right away — protects against permanent progress loss if the device is lost or the app is reinstalled.
3. **Push HQ level above everything else early.** No other building can exceed HQ's level, so HQ gates all other progress.
4. **Rush HQ to level 6 within the first 8 hours.** This unlocks a second free building queue — a critical new-account speed-run goal. If missed, the second queue slot must be bought later (small one-time real-money price, often cited around $4.99) — widely called "the single best purchase in the game" for F2P/low-spend players since it doubles construction throughput for the rest of the account's life.
5. **Never leave a builder queue idle** — even overnight. This is repeatedly cited as the single biggest efficiency loss for new players.
6. **Prioritize Development and Economy research** before Battle/combat research in the early game — compounding economic/time bonuses matter more than raw combat stats before your base can even sustain losses.
7. **Join an active alliance as soon as possible**, ideally in a newer/younger server so you're not hopelessly behind established players. Immediately use your free starter **Alliance Relocator** to move your settlement near the alliance's cluster — proximity determines how fast allies can reinforce or rally to you.
8. **Do your daily Hero Precinct "Advanced Searches"** (5 free per day) religiously — an easy, easily-missed source of hero fragments.
9. **Hero investment priority:** rank-ups matter more than raw level for power. Start ranking up cheaper Rare heroes before sinking materials into Legendary heroes, whose rank-up costs balloon quickly.
10. **Participate in daily/weekly events even passively** — skipping daily missions/events forfeits otherwise-free resources, fragments, and progression.
11. **Always scout (recon) a target before attacking it**, friend or stranger — check for hidden defenders or incoming reinforcements.
12. **Manage your shield deliberately.** New accounts get an initial peace period (roughly 3 days) during which they can't be attacked — but attacking or reconning anyone voids it immediately. Later, use Peace Flares consciously around PvP event windows.

**[MISTAKE]** Attacking or reconning another player during your own new-player peace period immediately voids your protection — many new players don't realize this and lose it accidentally in the first day.

**[F2P]** The second builder queue (unlocked free via the HQ-6-in-8-hours goal, or bought cheaply otherwise) is consistently rated the best value purchase in the game for low-spend accounts.

---

## PAGE 3 — Resources & Economy

### Core resources
State of Survival uses **four core resources**: **Food, Wood, Metal, and Gas** (note: this is SoS's own naming — do not confuse with "Meat/Coal/Steel/Gasoline," which belong to a different game in this genre). The premium/hard currency is **Biocaps**.

**[TERMINOLOGY]** Some cross-game confusion is easy here: SoS does not have a "Furnace," "Embassy," "Bank," or "Doctor/Biolab" building under those names — those belong to other zombie-survival strategy titles. SoS's actual building roster is listed in Page 4.

### Acquiring resources
- Passive production from in-base resource buildings.
- Supply Crates from inventory.
- Gathering Resource Tiles on the world map (9 tile levels; higher-level tiles hold more resources and sit progressively closer to the map center, the "**Oasis**"/"**Capital**").
- Attacking/plundering other players' settlements.
- Opening/recycling crates.
- Killing Infected and rallying Infected Fiends.
- Completing Intel missions.
- Event participation.
- Trading via the Market Stall / Supply Convoy.

**[TIP]** Splitting a large gathering army into two smaller, equal marches gathers the same total resources in roughly half the time (as long as the tile's capacity supports it) — effectively doubling gathering throughput for the same number of march slots.

**[PRIORITY]** Invest early in the Economic Talent tree's Wood/Food/Metal Haulage nodes to boost both gathering speed and march capacity for gathering runs.

### Resource protection
The **Warehouse** building shields a portion of each resource type from being plundered when your base is attacked; upgrading it raises both the protected amount and how much can be listed for trade at the Trading Post.

**Shield items:**
- **Peace Flare** — general attack/recon shield, in 2h / 8h / 24h durations. Bought from the Alliance Store with Alliance Donation Coins; a handful of free 8-hour flares are granted periodically (roughly one per week from some sources), plus free 24-hour flares tied to State Warfare participation.
- **Recon Jammer** — blocks or degrades enemy recon attempts against your settlement (an enemy can still send a recon march but gets less detail). Flagged by guides as a "must-activate" buff during PvP events like Capital Clash or Reservoir Raid.

**[MISTAKE]** Attacking or reconning someone else while your own Peace Flare is active immediately cancels your own shield.

### Hospital, wounded troops & permanent losses
This is the single most important defensive mechanic to explain clearly to readers:

- Wounded troops go to the **Hospital** first. Hospital capacity scales with its level (up to Plasma level 10 in recent updates, pushing total capacity into six figures on a maxed account).
- A **hard cap of 35% of a march's size** applies to how many troops can become "heavily wounded" from a single lost battle — sending 100,000 troops into a losing fight caps heavy wounds at 35,000, no matter how badly the fight goes.
- Once the Hospital is completely full, troops that would otherwise die are redirected to the **Enlistment Office** instead — but only **70% of that overflow** is captured there (30% is lost permanently); Enlistment Office capacity is **4× Hospital capacity**. Anything beyond the combined capacity is lost for good.
- **Losses from attacking another player's settlement do not get any Enlistment Office safety net** — those are always fully permanent losses, unlike defensive losses. This is a critical point for a "Mistake to Avoid" box: reckless offense is far riskier than defense.
- The Enlistment Office slowly accrues "**Duty**" over time (influenced by HQ level, current wounded count, daily task completion, and gathering activity); Duty is spent to convert enlisted survivors back into usable troops.
- **Instant Healing** can be used once every 24 hours to heal 10% of currently wounded troops instantly, at no resource cost — a valuable free "reset" after a bad fight.

**[F2P]** Do not spend Biocaps on speedups or routine resource purchases — both are described as low-value uses since speedups accumulate naturally from Daily Rewards/Growth Missions/events, and resources should be farmed rather than bought.

---

## PAGE 4 — Base Building

### Headquarters (HQ)
The HQ is the central building; its level hard-caps every other building's level. As it grows, its interface unlocks tabs for Skins, Collection Sets, Settlement Bonus, Hero Appointment, Plasma Level, and Defense System.

Illustrative level benchmarks (community wiki data, treat as approximate/subject to patch changes):

| HQ Level | Notes | March Capacity |
|---|---|---|
| 1 | Starting level | 350 |
| 10 | Requires Hero Precinct 9 + Garage 9 | 7,720 |
| 20 | Requires Hero Precinct 19 + Range 19 | 38,000 |
| 30 | Requires Hero Precinct 29 + Barracks 29; ~39.5 days base build time pre-speedups | 67,000 |
| 31+ | Becomes "Plasma Level" (HQ P1, P2…), requires the Institute of Plasma and a new resource, Plasma Cores | — |

Total cost from level 1 to 30 is roughly 1.26 billion Food, 1.26 billion Wood, 343 million Metal, and 93 million Gas — useful context for explaining why the game is a very long-term investment.

**[TERMINOLOGY]** Levels beyond 30 are called "Plasma Levels," not a renamed HQ tier — Plasma Level 1 unlocks expanded March Capacity, Plasma Level 4 unlocks Rally Capacity, and Plasma Level 5 unlocks "Special Forces" (T11) troops.

### Key buildings (confirmed State of Survival roster)
- **Headquarters (HQ)** — central building, unlocks higher-level structures, increases march capacity.
- **Hero Precinct** — upgrades heroes, hosts Hero Explore/Search, grants troop attack bonuses. (Functionally similar to a "hero academy" — do not confuse with the Barracks below.)
- **Barricade** — the wall/defense structure; slows enemy breach time and hosts assigned defending heroes.
- **Warehouse** — protects resources from looting; also raises Trading Post listing capacity.
- **Event Billboard** — collects event rewards, daily rewards, daily drop cards.
- **Lookout Tower** — early warning for incoming marches; shows march size, ETA, and whether it's a rally or solo attack (max level ~22 for full detail).
- **Trading Post** — spend Biocaps on items, or barter resources via a Market Stall.
- **Workshop** — upgrade Chief Gear and Hero Gear.
- **Assembly Point** — governs reinforcements received and "Timer Help" from allies; upgrades raise reinforcement capacity and timer-help duration/limits.
- **Hospital** — heals wounded troops; capacity scales with level (see Page 3).
- **Enlistment Office** — the overflow safety net for troops that would die once the Hospital is full (see Page 3).
- **Research Lab** — houses Development, Battle, and Economic research; can also incubate Biocaps.
- **Command Station** — needed to launch rallies; upgrades increase rally capacity.
- **Blast Shelter** — hides a march of troops for 15 min / 1h / 4h / 8h; sheltered troops can't be attacked or lost.
- **Range** (trains Hunters), **Garage** (trains Riders), **Barracks** (trains Infantry).
- **Training Camps** — boost training capacity and speed across all three troop-training buildings.
- **Institute of Plasma** — unlocks advanced tech/troops at HQ level 31+.
- **M.I.G.O. Center** — event hub, rankings, and related info.

**[TERMINOLOGY]** No Embassy, Bank, "Furnace," Infirmary, or "Chief Charm" exists in State of Survival under those names — these belong to other games in the genre (Whiteout Survival, Last Shelter: Survival). Omit them or clearly relabel with SoS's real equivalents (Warehouse ≈ storage-protection, Hospital ≈ infirmary).

### Recommended building priority order
1. **HQ first, always** — it caps everything else.
2. **Hero Precinct second** — heroes contribute more combat value than raw troop stats, and its level gates hero level caps.
3. Balance **Barracks / Range / Garage together** rather than maxing one troop type; many guides recommend pushing all three to level 16 relatively early to unlock Tier 6 troops.
4. Keep **Warehouse** and **Research Lab** upgraded in parallel so resource protection and passive research bonuses don't fall behind.

**[PRIORITY]** Never leave a build queue empty, even overnight — this is the single biggest avoidable efficiency loss for F2P/low-spend accounts.

**[F2P]** Rushing HQ to level 6 in the first 8 hours to unlock the second free build queue is one of the best-value early goals in the entire game.

---

## PAGE 5 — Research & Chief Growth

### Research tree
The Research Lab houses three main categories, plus later-game specialized trees:
- **Development** — boosts Hospital capacity, march-related stats, and reduces timers for healing, research, troop training, and construction. Essentially the "economy of time" tree.
- **Battle** — improves troop stats (Infantry/Hunter/Rider individually and overall), combat March Capacity, and troop training.
- **Economic** — speeds up wilderness gathering, boosts in-base production, and increases Alliance Honor earned.
- **Territory** — expands alliance-related capabilities (referenced alongside the other three in some sources).
- Later-game specialized trees: **Institute of Plasma** research, **Crystal Energy Institute**, **Rally Enhancement**, **Aircraft Research**.

**[PRIORITY]** Front-load **Development** research first — it compounds by accelerating every subsequent building upgrade — then shift into **Battle** research once your economy is stable. Since research can be freely reordered before a facility-level gate is reached, there's no permanently "wrong" order as long as Development comes first.

### Chief level & VIP
- **Chief EXP** is an inventory item spent to level up your Chief; requirements rise each level. Leveling grants rewards and 1–8 Talent Points for the Chief Talents tree (mirrors the research categories, e.g. the Economy tree's "Tool Improvements" construction-speed nodes).
- **VIP system** (separate from Chief Level): **12 total levels.** Requires an active subscription (bought with Biocaps for 7- or 30-day terms, or unlocked via events); your VIP level is then determined by accumulated VIP points.
  - Free daily login: 500 VIP points. Any $5 real-money bundle: 2,500 points. Daily Drop Bundle: 100 points/day.
  - Reaching max VIP 12 requires roughly 2 million+ points — described as "almost impossible" without real spending.
  - Notable breakpoints: **VIP 4** = +10% Construction Speed (often cited as the best target for F2P/low-spenders); **VIP 7** = extra Troop Formation slot + Legendary Hero Fragments; **VIP 8** = +1 March Slot; **VIP 12** = Quick Talent Switch (swap talent loadouts without resetting points).

**[F2P]** Target VIP 4 as a realistic milestone for the construction-speed bonus; VIP 7 and VIP 8 are good secondary targets.

### Chief Gear
Unlocks automatically in the Workshop at HQ level 22. **16 total gear sets**, each with **6 unique pieces**, tied to troop types: **Infantry** uses Boots + Helmet; **Hunters** use Knee Pads + Communicator; **Riders** use Chest Armor + Weapon. Set bonuses scale through gear rarity color, up to Red gear (~+8% at the top set bonus tier).

Upgrade materials: **Advanced Alloy** (2 Biocaps/unit) and **Adhesive** (200 Biocaps/unit) can both be bought directly with Biocaps when short; free sources are the Infected Horde event, Plague Zones, the Daily Biocap Shop, and the Alliance Showdown event (note: Adhesive is not obtainable from Plague Zones or Infected, unlike Alloy).

**[TIP]** Watch Daily Deals for discounted Chief Gear item offers — usually cheaper than buying pieces at normal cost.

### Chief Badges
Unlocked at HQ level 25. **18 total badges across 3 shapes**: round = Hunter Lethality/Health, hexagon = Rider Lethality/Health, shield = Infantry Lethality/Health. Each badge upgrades **10 times**; a fully maxed set of one type adds roughly +332% Lethality/Health cumulatively. Crafting materials: Mercenary Influence, Badge Tags, and (higher tiers) Certificate of Honour.

---

## PAGE 6 — Heroes

### Rarity tiers
State of Survival does not use "SR/SSR" naming. The real ladder is:
- **Rare/Elite** (blue) — lowest tier; only two heroes sit here permanently (Rusty, Ghost).
- **Epic** (purple) — mid-tier, obtained via Hero Search (paid with Biocaps) and Intel Missions; skews toward "infected-killing" specialists (Sarge, Eva, Mike, Jane, Travis, Nanami).
- **Legendary** (yellow/orange) — top standard tier, obtained via special events, story unlocks, and paid bundles; nearly all "Generation" heroes live here (Nikola, Maddie & Frank, Jeb, Trish, Wolfe, Miho, Zoe, Ash, etc.).
- **Resonating Heroes** — a special, non-power-tiered category (Wacko, Daryl, Joker, and the Resident Evil crossover Leon S. Kennedy). They have no independent stats — they mirror the level, rank, skill level, and gear of another hero of the **same troop type** that you designate, acting as a free "second copy" of an investment you've already made. High value if resonated with your best hero of that type; commonly wasted otherwise.

**[TERMINOLOGY]** There is no confirmed rarity tier above Legendary. The top-end power layer instead comes from **Hero Completion / Awakening** (a progression system, not a new rarity — see below).

### Hero roles
Three roles, each tied 1:1 to a troop type and to a fixed combat position in the Explorer Trail:
- **Brawler** leads **Infantry** — highest HP of the three, shortest range, targeted first. Priority investment for rally leaders, since a dead front line collapses the whole march.
- **Marksman** leads **Hunter** troops — highest Attack, lowest HP, longest range; the primary raw damage dealer; targeted second.
- **Scout** leads **Rider** troops — mobility, utility, healing, and crowd control rather than pure damage; targeted last.

On top of role, each hero also has a **Benefit classification** (up to two per hero): Development, Gathering, Infected-killing, Patrol (garrison/defense), Rally, or Siege (attacking enemy bases/PvP). This is why the same hero can be described differently across guides.

### Notable heroes (illustrative — verify current in-game names before publishing, as the roster expands regularly)
- **PvP / Rally leads:** Buzz (top Infantry rally lead), Cardini (Hunter, poison/burn debuffs + rally VP buff), Lucky (Rider, mobility + rally troop health), Jeb (Hunter, armor penetration + troop-attack buff), Tina (Hunter, lifesteal + rally attack/VP bonus), Maddie & Frank (Rider, F2P-viable all-rounder), Ray & Rolex (garrison/PvP siege specialist), Nikola (Infantry, widely called best garrison/tower-defense hero).
- **PvE / Explorer Trail:** Trish (Rider support — HP regen, freeze CC, slow), Wolfe (Infantry — defense debuff + self-heal, strong PvE pick), Eva (top Explorer pick, pairs with Wolfe), Travis (reduces Stamina cost on infected-hunting — near-mandatory early pick), Ghost (Rare, gas-gathering + anti-infected damage for early wilderness clears).
- **Resource-gathering specialists:** Mike = food, Rusty = metal, Chef = wood, Ghost = gas.

**[MISTAKE]** Over-investing in starter heroes (Ghost, Rusty, Sarge) is a near-universal beginner mistake — use them for cheap early utility/gathering only, and save fragments/manuals for Legendary heroes.

### Skills, leveling, and awakening
- Every hero has **3 base skills** (active and/or passive). Active skills can be disabled by enemy Silence effects; passives are immune to Silence.
- Skills have two separate effect tracks: an **Explorer effect** (used when directly controlling the hero in the Explorer Trail) and a **Military/troop effect** (a passive buff applied to the whole marching army in PvP/rally/wilderness contexts).
- Older heroes level skills via rarity-specific Skill Books; from the 4th-generation Legendary heroes onward, skill levels auto-upgrade with Hero Rank.
- **Awakening/Hero Completion** is the real above-Legendary power layer: it grants 3 additional unique skills (on top of the base 3) via Limitless Capsules and Completion Potions, each leveling to 10, with level 10 gated behind a Limitless Syringe plus fully-researched Limitless Talents. Completion also assigns each hero a **Build** — Control, Offense, or Defense — in a Control > Offense > Defense > Control counter loop, adding team-composition depth.

### Rank & Level (SoS does not use "star-up" naming)
Two parallel tracks:
- **Level:** 1–80 cap, raised with Combat Manuals (tiers I–V), earned from Explorer Trail/wilderness kills/events.
- **Rank:** the real tier-gate, paid in Hero Fragments + Hero Badges, capped at **General**. Approximate total fragments needed to reach Colonel rank: **~1,200** — guides note this can take months per hero, reinforcing the "focus on 3–4 heroes" advice below.

**[MISTAKE]** Spreading Hero Fragments across too many heroes instead of focusing on 3–4 (one per troop type plus role coverage) is called the single most repeated hero-related mistake in the community.

### Hero gear
Unlocks automatically at Workshop/HQ level 16. Each hero role has its own 3-piece set (Head, Body/Chest, Feet/Leg), across 5 tiers (Common → Uncommon → Rare → Epic → Legendary). Materials: Hero Gear Parts (daily farmable, notably from the Influencer Trap event) and Hero Gear Designs.

**[PRIORITY]** For rally leaders, max Infantry Chest gear first (Health — keeps the front line alive). For non-leaders, prioritize Hunter Chest gear (damage output). Rider gear is generally the lowest priority.

### Hero Fragments
Called Fragments, not "shards." Four categories — Legendary, Epic, Rare/Elite, Resonating — each exchangeable into General Hero Fragments, which convert 1:1 into fragments for any owned hero (with a few named exceptions that can't be obtained this way). Farming sources for Legendary fragments include VIP 7+ (1 free/day), Alliance Throwdown (biweekly), the Reservoir Store, State vs State rewards, and paid bundles.

---

## PAGE 7 — Troops & Combat

### Troop classes
Three types, each trained in a dedicated building, each with two sub-types governing counter matchups:
- **Infantry** (Barracks) — very high HP/Defense, very low Attack. Absorbs incoming damage first. Sub-types: **Shields** (bonus Defense vs. Hunters), **Shotguns** (bonus Defense vs. Riders).
- **Riders** (Garage) — mid-tier HP/Defense, higher Attack. Sub-types: **ATVs** (bonus damage vs. Infantry), **Bikers** (bonus damage vs. Hunters, and can bypass Infantry to hit Hunters directly on special passes).
- **Hunters** (Range) — best Attack/Lethality, most fragile, positioned back line. Sub-types: **Bows** (bonus damage vs. Infantry), **Snipers** (bonus damage vs. Riders, can bypass Infantry to hit Riders directly).

**Battle resolution order is fixed**: Infantry → Rider → Hunter, front to back. All damage lands on Infantry first; only once Infantry is dead does damage reach Riders, then Hunters.

**[MISTAKE]** Fielding a mono-type army without understanding this resolution order is explicitly discouraged by the developers themselves, who recommend a baseline 1:1:1 ratio as a "safe" starting point.

### Troop tiers (T1–T12 current max, as of this research)
Regular tiers T1–T10 unlock via Barracks/Range/Garage building level. Sample tier names:

| Tier | Infantry | Hunter | Rider |
|---|---|---|---|
| T1 | Grunts | Archers | Rovers |
| T5 | Slashers | Crossbows | Hogs |
| T9 | Maulers | Nightstalkers | Demon Raiders |
| T10 | Executioners | Bullseyes | Death Cruisers |
| T11 | Pulse Elites | Pulse Assassins | Pulse Predators |
| T12 | Crystal Vanguards | Crystal Arbalists | Crystal Riders |

- **T9** unlocks at building level 26, **T10** at level 30 (same gating across all three troop-training buildings).
- **T11** requires building the **Institute of Plasma**, researching a Plasma Development branch up to level 5.
- **T12** requires the **Crystal Energy Institute** (available once a server/state is 86+ weeks old) plus T11 already fully unlocked, and runs on a separate resource, **Crystal Essence**.
- No confirmed T13 as of this research — T12 is the current ceiling for named tiers. A parallel "Plasma Level" system also adds continuous stat bonuses to training buildings beyond level 30, stacking on top of the named tiers.

### Training & promotion
Base training time scales dramatically from tier to tier (roughly a 12x increase from T1 to T10). Training speed is boosted by Training Camp buildings, the "Training Routines" research line, Chief Talent projects, and temporary purchased buffs.

There is no "merge 3-into-1" system — instead, troops are directly **upgraded**: select an existing lower-tier stack in the Train tab and convert some/all of it to the next tier. Upgrading is generally more resource-efficient than training fresh troops at the same power gain.

**[MISTAKE]** Upgrading all troops of a sub-type (e.g., all Snipers) to a higher tier can lose that sub-type's specialization if not tracked carefully — always check whether the upgraded tier keeps the counter role you need.

**[PRIORITY]** Once a new tier unlocks, upgrade accumulated lower-tier stock first, then train fresh troops at the new tier once the upgrade pool is exhausted — but keep some lower-tier depth as insurance against a wipe rather than going 100% top-tier.

### Composition guidelines
- Generalist baseline: **Infantry 40% / Hunters 30% / Riders 30%**, shifting toward **Infantry 30% / Hunters 40% / Riders 30%** at higher tiers/PvP.
- Settlement-attack-specific: **Infantry 60% / Rider 20% / Hunter 20%**.
- **Mono compositions** are used specifically for rallies led by a troop-type-specialized hero (type-specific buffs are wasted on mismatched troops — sending the wrong troop type into a mono rally is considered poor rally etiquette and can get a player kicked from the rally).
- **Mono is discouraged for garrison/defense** — mixed compositions are strongly favored there, since Infantry alone can't deal enough damage while Riders/Hunters are too vulnerable without a front line.

### March & rally mechanics
- **March slots:** base + research + VIP caps out at 6 total. Research: Leadership I–IV (+1 slot each). VIP: +1 slot at VIP level 8.
- **March size/capacity:** determined primarily by HQ level, layered with a March Capacity research line, hero rank/level contributions, consumable items, and Chief Gear/Talismans.
- **Formation:** up to 3 heroes per march — 1 Captain (sets primary bonuses) + up to 2 Support heroes. Troop formation is automatic by type (Infantry front, Riders middle, Hunters back), not manually positioned.
- **Rally launch timers:** rally leaders set a launch window (5/15/30/60 minutes); allies must physically march to the leader's city before it fires or the rally fails to launch.
- **Rally size cap:** commonly documented max of 20 alliance members per rally for reward-crate rallies.
- **Reinforcement:** the Assembly Point handles reinforcements sent to allies; each alliance member can send one reinforcement march to a given city. Critically, **a reinforcing player's own combat stats are used for those troops**, not the base owner's — meaning a strong ally reinforcing a weak account can massively swing that account's defensive strength.

**[ADVANCED]** Rally-lead tactic: since research point allocation can be freely reset, some top rally leaders temporarily max every rally/march-capacity research node, open the rally, let it fill, then switch back to a stat-focused build (Lethality/Attack/Defense/Health) once the rally is locked in — retaining the larger size while benefiting from stronger combat stats for the fight itself.

### Combat mechanics
- Core stats: **Attack, Lethality, Defense, Health**. There's no separate crit stat — Lethality functions as the multiplier governing both damage dealt and how many enemy troops die outright vs. are merely wounded.
- Attacker army size beyond the defender's total has diminishing returns — an oversized army can't fully commit; excess troops beyond a rough 3:1 ratio largely sit idle in a given engagement.
- Troops fatigue slightly each combat round, dealing marginally less damage as a fight drags on.
- Every 20 rounds, Biker/Sniper sub-types get a bypass pass to hit Hunters/Riders directly, skipping Infantry.

**[ADVANCED]** Troop ratio has a large impact on casualties in close fights. Community testing found the default 33/33/33 split is not optimal: for the same army size in a near-loss scenario, casualties varied roughly 5x purely based on ratio. Recommended: **60/20/20 (Infantry/Rider/Hunter)** if the fight might be lost; **50/25/25** for a close-to-guaranteed win; roughly even splits only once victory is already assured and the goal is maximizing kill count.

### Explorer Trail (PvE)
Housed in the Hero Precinct: **12 trails × 12 challenges each**, gated by a separate **Squad Stamina** resource (regenerates 6/hour, caps at 100). Players directly pick up to 3 heroes and trigger their skills against zombie waves — Brawler front-center, Marksman left, Scout right — following each hero's Explorer effect rather than the Military effect used in PvP.

**[TERMINOLOGY]** "Explorer Camp" is not the correct in-game name — the actual feature is the **Explorer Trail**. Likewise, "Frenzied Zombies" could not be confirmed as real State of Survival content across this research and should be verified directly in-game (or dropped) before publishing.

---

## PAGE 8 — Alliances

### Joining & structure
Any player can found an alliance (costs 400 Biocaps if HQ is below level 8, free at level 9+). Founders set name, tag, motto, language, and recruitment mode (open or closed/approval-based). New joiners get one free **Alliance Relocator** — use it immediately to move near the alliance's cluster, since proximity determines reinforcement/rally speed.

### Ranks & permissions
Six tiers, R0–R5:
- **R5 (Leader, 1 per alliance):** full control — name/tag/motto/language changes, leadership transfer, disband, build Alliance HQ/Towers, kick, edit message board, manage recruitment/invites, spend alliance funds, start alliance tech, promote/demote, mail all, timer help, resource support. If the leader leaves without transferring leadership, the alliance disbands.
- **R4 (Co-leader):** nearly everything R5 can do except name/tag changes, leadership transfer, disband, or building the Alliance HQ.
- **R3:** can promote/demote lower ranks, mail all members, give timer help/resource support.
- **R2:** can mail all members, timer help, resource support.
- **R1 (default on approval):** timer help, resource support, view members, leave.
- **R0:** pending applicants, no permissions.
- Promotion/demotion rule: a member can only be promoted/demoted by someone two ranks above them.
- **Alliance Takeover:** if an R5 is inactive 7+ days, members can trigger a leadership replacement for 200 Biocaps via the Alliance Manage panel.
- Alliance level caps at 11; max members starts at 50, expandable to 100 via alliance tech.

### Alliance tech, help & territory
- **Alliance Tech** works like personal research but benefits the whole alliance; any member can donate resources/items to speed it. Categories: Development (member cap, timer-help count/duration, various speed bonuses), Territory, and Battle.
- **Timer Help** reduces build/research/troop-training timers for allies and earns Alliance Honor (a currency bound to your account across alliance changes, usable in the Alliance Store).
- **Alliance Territory:** alliances can build an Alliance HQ (R5 only) and Alliance Towers (R4 can help), and plant territory flags to claim wilderness zones for resource/bonus control.

**[MISTAKE]** Overextending alliance territory (claiming more flags than the alliance can actually defend) is a documented pitfall for newer alliance officers — expand territory in step with the troops available to hold it.

### Alliance-vs-alliance competitions
- **Fortress Fight** (weekly, Fridays): 16 total fortresses; occupy one continuously for 30 minutes during a 2-hour challenge window to take control.
- **Alliance Showdown** (weekly, ~5 days): six same-tier alliances grouped together; players commit their strongest march into one of three lanes (marches are "copied," so nothing is actually risked); win 2 of 3 lanes to win the round.
- **Alliance Throwdown** (biweekly, 6 days): points-based competition against alliances of similar tier (5 tiers total); members complete tasks for alliance-wide points and rewards.
- **Reservoir Raid** (biweekly, ~1 hour): two alliances fight over "purified water" tiles/buildings; troops are only wounded here, never permanently killed, lowering the stakes and encouraging aggressive play.
- **Doomsday Open**: a larger seasonal version of Reservoir Raid played across "Battle Zones" of up to 256 alliances in a qualifying bracket; top registered alliances (up to 640) qualify by Raid Score.

**[TIP]** Reservoir Raid strategy: don't send your best heroes out on marches — keep them home defending — and assign your 4–6 strongest players as rally leaders for pushes on key buildings.

---

## PAGE 9 — Events Calendar

A quick reference of recurring events, with notes on strategy. Confirm current live events against the in-game Events Billboard, as content rotates seasonally.

- **Survival of the Fittest (SotF)** — monthly, hero-focused, 5–7 stages over 1–2 days each. Tasks (building, speedups, troop training, kills, hero development) earn points toward hero fragment/completion capsule rewards.
  **[TIP]** Save up troop-training actions, hero-development actions, and time-limited resources (Advanced/Epic Hero Searches, speedups) to burn specifically during SotF windows, since they convert directly into event points.

- **Capital Clash** — biweekly, statewide, ~8 hours (or ends early if an alliance holds the Capital 4 consecutive hours). Alliances fight for control of the map-center Capital and 4 surrounding Towers. The winning alliance's leader appoints a state **Governor** for the following two weeks — treat this as a political/leadership event, not just combat.

- **State vs State (SvS)** — monthly, the game's flagship cross-server event (requires the state to be 14+ weeks old). Phases: Matching → Preparation (5 sub-stages over ~5.5 days) → Warfare (15 hours, players can physically cross into the enemy state) → Revival/Healing windows (revive up to 90% of dead troops via Biocap-gated revival kits).

- **Kill Stage** — biweekly, 47 hours. Points scored from rallying/solo-attacking settlements, defending your own, hitting resource tiles, Fortress Fights, and Capital Clash — an overlay scoring system on top of normal PvP activity.
  **[MISTAKE]** Sending troops out to gather resource tiles during Kill Stage or State Warfare exposes them as easy kill-point targets — garrison towers or stronger allies instead during these windows.

- **Influencer Trap ("the Trap event")** — alliance members donate Energy Cells (earned by killing Infected) to charge a structure to 100%, then trigger a 30-minute rally boss fight (cooldown ~47 hours). If the boss isn't killed in time, a zombie horde spawns instead and can still be farmed.
  **[TIP]** Skew troop composition toward damage (Hunters/Riders) over defensive Infantry for this event, and prioritize participating in many rallies over perfecting one — rewards are shared with anyone who donated or dealt damage.

- **Return of the Brave / Recall Event** — 7-day event for lapsed accounts. Joining an alliance nets free supplies via mail; daily login unlocks buff tiers; allies get bonus rewards for rallying alongside a returning player.

- **Seasonal limited events** — thematically reskinned every season (examples from 2025: "Doomsday Journey," "Frostfire Altar"), typically bundling several mini-games under one seasonal currency.
  **[TIP]** Event-exclusive currencies usually expire or convert poorly at event end — spend them down before the event closes, prioritizing HQ/march skins or Chief/Hero Gear materials over pure cosmetics if forced to choose.

- **Anniversary events** — historically bring a new free Legendary hero plus login bonuses and a run of bonus mini-events.

**[TERMINOLOGY]** "Sunset Speedway," "Roaming Trials," and a literal "KvK" mode could not be confirmed as State of Survival content in this research — SvS (State vs State) is the game's actual large-scale cross-server PvP system and should be used instead of "KvK" terminology.

---

## PAGE 10 — PvP & Territory Warfare

### Attacking
Always **recon before attacking** (costs resources; needs Lookout Tower level ~22+ for full detail) — reveals troop counts, hidden troops, pillageable resources, tech/skill stats, and crucially whether the target has incoming reinforcements. Recommended attacking composition: **60% Infantry / 20% Riders / 20% Hunters**. Set combat-focused Chief Talents before attacking (Infantry defense/health, Hunter lethality/attack), and activate skills like "Emergency Dressing," which converts 30% of would-be troop deaths into wounded instead.

A failed attack costs roughly **35% dead / 10% heavily wounded / 55% lightly wounded** of the march (proportions vary with march size).

**[MISTAKE]** Attacking without scouting first is the most commonly cited PvP mistake — it leads to marches being wrecked by hidden defenders or reinforcements the attacker didn't detect.

### Defending
- **Peace Flare** (2h/8h/24h shield) and **Recon Jammer** (blocks/degrades enemy recon) — see Page 3 for details.
- **Blast Shelter** — hides a march of troops for a chosen duration, used to dodge an incoming crushing attack.
- **Lookout Tower** — at max level, gives advance warning plus incoming march details (troop count, heroes, gear, ETA), enabling a reinforce/evacuate/brace decision.
- **Barricade** — the core defensive structure; a lost defense burns the barricade for a cooldown period, worse if hit repeatedly in quick succession.
- **Patrol heroes** should be manually assigned to defense duty rather than relying on default auto-assignment, since not every auto-picked hero has defense-relevant skills.
- **Reinforcement** from allies is one of the strongest defensive tools — reinforcing troops fight using the reinforcer's own combat stats, so a strong ally reinforcing a weak player massively boosts effective defense.

**[PRIORITY]** Keep the Lookout Tower and Assembly Point upgraded early — advance warning and reinforcement capacity are cheap, high-value defensive investments relative to raw troop numbers.

### New/returning player protection
New accounts get an initial peace period (roughly 3 days) during which they can't be attacked — voided immediately if the new player attacks or recons anyone else. Returning/lapsed players get Return of the Brave event buffs plus alliance welcome gifts rather than a hard shield.

### Migration & server merges
- **State Merge:** FunPlus periodically merges under-populated older states into a designated "main state" (each main state can absorb 1–4 sub-states); affected players get about a week's advance notice, and generous compensation is distributed after the merge.
- **State Transfer:** a separate, player-initiated feature — accounts inactive 60+ days with HQ level 12+ become eligible to transfer to a different state voluntarily.
- **Relocation items:** Random Relocator (random spot in current state), Advanced Relocator (choose exact destination), Alliance Relocator (nearest open plot near your alliance's HQ/leader — relocating into Alliance Territory grants gathering bonuses and troop buffs while garrisoned there).

---

## PAGE 11 — F2P Strategy & Spending Priorities

A dedicated page distilling free-to-play spending guidance, useful as a standalone reference section (mirrors the "F2P" callouts used throughout the AoZ guide, but consolidated here for quick lookup).

**Don't spend Biocaps on:**
- Routine speedups (these accumulate naturally from daily rewards, missions, and events).
- Everyday Combat Buffs, unless you are personally the rally leader (non-leaders inherit the leader's stats for free).
- Chief/Squad Stamina potions.
- Regular resource purchases (farm instead).

**Do spend Biocaps on:**
- Chief Gear materials (Advanced Alloy/Adhesive) when just short of an upgrade threshold.
- Recon Jammer during PvP events (Capital Clash, Reservoir Raid).
- Gathering Boosts when all march slots are dedicated to gathering (returns many times their cost in resources).
- VIP subscription/points — target at least VIP 4 (construction speed), then VIP 7/8 as secondary breakpoints.

**Event-specific spending:**
- **Ray's Place** — generally the best legendary-hero-fragment-per-Biocap ratio; wait for a hero generation you actually want before spending, since older/weaker heroes rotate through as the server ages.
- **Value Voucher** events — historically strong Biocap-to-fragment conversion rate.
- General rule of thumb repeated across guides: **spend during events that give bonus rewards for spending** (e.g., Alliance Throwdown) rather than spending in a vacuum.

**General F2P tactical notes:**
- A single F2P player generally cannot beat a whale (heavy spender) in direct 1v1 combat — alliance rally-swarming (multiple F2P players combining rallies against one weaker/offline whale target) is the standard counter-strategy.
- Concentrating hero investment matters more than spreading it — one fully-ranked, high-level hero outperforms several partially-developed ones.

---

## PAGE 12 — Common Mistakes Checklist

A consolidated "mistakes to avoid" list, useful either as its own page or distributed as callout boxes across the pages above (as was likely done in the Age of Z Origins guide).

**Economy/base:**
- Leaving a builder queue idle, including overnight.
- Missing the free second-queue unlock window (HQ to level 6 within 8 hours).
- Over-focusing combat/troop stats before the economy is stable.
- Spending Biocaps on resources or routine speedups instead of farming/earning them.

**Heroes:**
- Over-investing in starter heroes (Ghost, Rusty, Sarge) instead of using them only for cheap early utility.
- Spreading Hero Fragments across too many heroes instead of focusing on 3–4.
- Confusing gathering/utility heroes with combat heroes (never burn premium fragments on their combat stats).
- Misusing or ignoring Resonating Heroes (resonating with a weak hero instead of your best one of that type).
- Spreading gear upgrades evenly across all slots instead of concentrating on 1–2 priority pieces per hero.

**Troops:**
- Training the newest unlocked tier immediately, before tech/gear/hero levels can actually use the higher stats.
- Going 100% top-tier with zero reserve depth (or the opposite: never reaching the top tier at all).
- Using the wrong troop ratio for context (mono comps are efficient for PvE/rallies but risky for open PvP without diversification).
- Losing sub-type specialization by upgrading an entire stack without checking what the new tier keeps or loses.

**Combat/PvP:**
- Attacking without scouting (reconning) first.
- Retaliating impulsively after being attacked, without checking whether troops are already degraded.
- Neglecting the Lookout Tower and not requesting reinforcements from the strongest available allies.
- Default (non-curated) garrison hero ordering instead of manually assigning Patrol-skilled heroes to defense.
- Poor march-speed/ordering in rallies (not sequencing marchers by speed/distance).
- Sending troops to exposed resource tiles during Kill Stage or State Warfare.

**Alliance:**
- Not joining an active alliance early.
- Overextending alliance territory without enough troops to defend it.
- Treating Capital Clash purely as combat and ignoring its political/Governor-appointment consequences.

---

## PAGE 13 — Glossary & Terminology Corrections

Useful as a footnote/appendix page, since several terms commonly associated with this game genre do **not** apply to State of Survival specifically. Recommended to include this as a small disclaimer box at the bottom of the game sheet, similar to any existing cross-game clarifications on the Age of Z Origins guide.

| Term as commonly assumed | Status in State of Survival |
|---|---|
| Furnace | Does not exist — SoS's central building is the **Headquarters (HQ)**. |
| Meat / Coal / Steel / Gasoline | SoS's actual resources are **Food, Wood, Metal, Gas** (plus Biocaps as premium currency). |
| Embassy / Bank / Doctor / Infirmary / Chief Charm | None of these exist under these names in SoS. |
| Explorer Camp | Correct name is **Explorer Trail**. |
| Frenzied Zombies | Not confirmed to exist in SoS — verify in-game before publishing, or omit. |
| Sunset Speedway / Sunset Canyon | Not confirmed as SoS content (Sunset Canyon is a Rise of Kingdoms feature). |
| Roaming Trials / KvK | Not SoS terms — SoS's equivalent large-scale cross-server event is **State vs State (SvS)**. |
| Settlement takeover (as an event name) | No literal event by this name found — likely conflates **Capital Clash** or **Fortress Fight**. |

**Note for implementation:** given how many terms overlap or clash across this game genre, consider adding a short "Not to be confused with..." note in the site's game-sheet template itself, so future game sheets (beyond State of Survival) don't accidentally cross-contaminate terminology between titles.

---

## Source Notes

All content above was compiled from State of Survival's official Fandom wiki, official in-game guide pages, FunPlus's own developer blog, and multiple third-party strategy sites (BlueStacks, TouchTapPlay, Pillar of Gaming, GamesGuideInfo, Empire Build Academy, PocketGamer, GamingOnPhone, and others), current as of mid-2026. Numeric values (costs, percentages, capacities) are drawn from community-maintained tables and may shift with game balance patches — treat them as illustrative of relative scale/progression rather than exact current-patch figures, and consider flagging this on the published page footer.
