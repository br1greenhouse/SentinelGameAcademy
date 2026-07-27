---
game: Lords Mobile
developer: IGG (I Got Games)
status: DRAFT CONTENT — for implementation into Sentinel Game Academy site structure
language: English
last_research_pass: 2026-07-28
---

# Lords Mobile — Full Manual Content

> **Implementation note for Bruno:** This file contains only the *content* (text, data tables, tips) for the new Lords Mobile game section — no HTML/site structure, since that's already handled in Claude Code. Suggested breakdown: one page per `##` section below (19 pages total, similar scope to the Age of Origins guide). Info boxes are tagged inline with the labels used on the existing site (`TIP`, `MISTAKE TO AVOID`, `PRIORITY`, `F2P`, `ADVANCED`) — swap in the matching styled component when you build the pages.
>
> **Three corrections vs. the original brief, flagged during research (with sources), so the manual stays accurate:**
> 1. **"Tundra Trek" does not exist in Lords Mobile** — that mode belongs to other games (Monopoly GO / Whiteout Survival). Replaced with Lords Mobile's real PvE modes: **Kingdom Tycoon** and **The Labyrinth**.
> 2. **"Beast Keeper"** is an outdated/community name — the current official system is called **Familiars**, built around the **Monsterhold** building.
> 3. **Troop tiers currently cap at Tier 5** (the Luminary line), not T1–T11.
>
> Numbers pulled from the Lords Mobile Fandom Wiki (most reliable numeric source) should still get a quick in-game spot-check before publishing, since exact figures shift with balance patches — flagged inline wherever a figure is soft.

---

## Table of Contents

1. Game Overview
2. Getting Started
3. City & Buildings
4. Resources & Economy
5. Heroes
6. Troops & Combat
7. Research (Academy)
8. Guild System
9. Kingdom vs Kingdom (KvK)
10. Guild Showdown & Guild-vs-Guild
11. Colosseum (PvP Arena)
12. Familiars (Pets)
13. Monster Hunting & Darknests
14. Traps & City Defense
15. VIP System
16. Events Calendar
17. F2P Strategy & Spending Guide
18. Common Mistakes to Avoid
19. Glossary

---

## 1. Game Overview

**Lords Mobile** is a free-to-play strategy game by **IGG (I Got Games)**, blending real-time city-building, RPG hero collection, and large-scale multiplayer warfare. Released in **March 2016** for iOS, Android, and Steam/Windows, it has grown into one of the longest-running mobile strategy titles, crossing **500 million downloads** by its 10th anniversary (February 2026).

**Setting:** Players take the role of a new Lord or Lady rebuilding a castle from ruins on the fractured **Continent of Athena**, in a realm known collectively as **the Kingdoms**. The old dragon-ruled empire has fallen, and Heroes from wildly different backgrounds — knights, dwarves, mermaids, dark elves, angels, demons, steampunk inventors — can be recruited to the player's cause. The art direction deliberately mixes fantasy archetypes rather than sticking to one theme.

**Core loop:** build and upgrade your city → gather resources → recruit and level Heroes → train troops → research technology → cooperate with a Guild → fight other players and monsters for territory, loot, and rank.

**Platforms:** iOS, iPadOS, Android, Amazon Appstore, and Windows (Steam / official PC client).

> **TIP:** Lords Mobile rewards long-term, patient accounts more than short bursts of activity. Progress compounds — a small daily habit (collecting resources, spending speed-ups, checking events) beats occasional long sessions.

---

## 2. Getting Started

### First steps
- New accounts are placed into a **randomly assigned Kingdom (server)**.
- The tutorial walks through resource collection, troop training, and basic combat via scripted mini-challenges.
- Early accounts get a temporary protective window so newer players aren't immediately farmed by veterans.

### Choosing / changing your Kingdom
| Option | Requirement | Notes |
|---|---|---|
| **Novice Relocator** | Castle Level ≤ 5, within first 7 days of account creation | Free/early item to move to a different Kingdom |
| **Kingdom Migration Scroll** | Any time after the novice window | Purchased from the Guild Shop for roughly **810,000 Guild Coins** |
| **"Kingdom hopping"** | Advanced players | Teleporting an established account into a freshly-opened Kingdom to claim an early Might/resource lead — a well-known competitive tactic, not an official feature |

> **PRIORITY:** New/younger Kingdoms mean softer competition and eligibility for new-server perks. If you land in a Kingdom with heavily entrenched, high-Might guilds, seriously consider the Novice Relocator before Castle 5.

> **TIP:** Never let Construction, Research, or Troop Training queues sit empty. Idle queues are wasted time — always have something running, even a cheap upgrade, while you decide on your next real move.

---

## 3. City & Buildings

Lords Mobile has around **30 constructible buildings**, split into resource, standard, advanced, familiar-support, and utility categories.

### Resource buildings
| Building | Produces / Stores |
|---|---|
| Farm | Food |
| Lumber Mill | Timber |
| Quarry | Stone |
| Mine | Ore |
| Manor | Gold |

### Core standard buildings
| Building | Function |
|---|---|
| **Castle** | Fixed, permanent building. Its level (max **25**) gates almost every other building and system — most structures can't out-level the Castle. Reaching **Castle 25 ("C25")** is a major milestone unlocking the Altar, the Prison, and Tier 4 troops. |
| **Barrack** | Trains all four troop types using Food, Timber, Stone, Ore, and Gold. |
| **Infirmary** | Heals wounded troops instead of letting them die outright. Capacity is finite — a key planning constraint for both attacking and gathering. |
| **Academy** | Permanent building; houses the entire Research tree (Economy, Military, Defense, Monster Hunt, Familiars, Wonder Battles, Gear). |
| **Embassy** | Permanent building; manages alliance/guild functions including reinforcement capacity. |
| **Vault** | Fixed building; automatically shields a capped amount of resources from being plundered when your Turf (city) is attacked. |
| **Watchtower** | Warns of incoming attacks, scouting attempts, and incoming reinforcements. At **Level 25**, unlocks "Fortify" — a defense boost that also cuts attacking troops' ATK by 10%. |
| **Workshop** | Forges and upgrades Hero Equipment/Gear. Reaching **Level 25** unlocks a third combined accessory slot. |
| **Trading Post** | Unlocked at Castle 5; lets guildmates gift each other resources. Upgrading raises the transferable amount and lowers the "supply tax"; at Level 25, boosts Supply Troop travel speed by 100%. |

### Advanced & utility buildings
Altar, Battle Hall, Prison, Treasure Trove, Bazaar, Cargo Ship, Colosseum (unlocked at Castle 10), Hero Stages, Kingdom Tycoon, The Labyrinth, Sanctuary, Shelter, Synthesis Isle.

### Familiar (pet) support buildings
| Building | Function |
|---|---|
| **Monsterhold** | Central hub to view, level, and manage Familiars. |
| **Spring** | Produces **Anima**, the resource used for Pacts and Skillstones. |
| **Mystic Spire** | Merges Anima + items into Pacts and Skillstones. |
| **Gym** | Trains Heroes and Familiars together for combat effectiveness. |

> **PRIORITY:** Because resource buildings cap at Level 24 until the Castle hits Level 25, push Farms/Quarries/Lumber Mills/Mines to 24 *before* rushing Castle 25 — otherwise you waste the window where they could already be maxed.

> **MISTAKE TO AVOID:** Don't ignore Infirmary capacity relative to how many troops you send out gathering or attacking. If you're hit while over-extended past your healing capacity, you lose troops permanently instead of just healing them.

---

## 4. Resources & Economy

### The five resources
**Food, Timber (Lumber), Stone, Ore, Gold** — plus the premium currency, **Gems**.

### Protection & logistics
- **Vault protection:** automatically shields a capped amount of Food, Timber, Stone, and Ore from plunder when you're attacked; only the excess above the cap can be stolen. **Gold protection specifically unlocks at Vault Level 25.** Upgrading the Vault raises the protected cap for every resource type.
- **Trading Post:** lets guildmates gift resources to each other (a "supply tax" is deducted, reduced by upgrading the building).
- **Cargo Ship:** used for material trades (e.g. Blazing Embers for gear upgrades).
- **Guild Coins:** a separate internal currency earned through Guild Quests/Shop participation — used for items like the Kingdom Migration Scroll.

### Strategy: hyper-farming
A recurring community strategy is **"hyper-farming"** — concentrating building upgrades on one dominant resource type (often via a dedicated alt/farm account) rather than spreading investment evenly, since large-scale guild warfare tends to demand huge stockpiles of a single resource on short notice.

> **F2P:** Daily login gifts, Solo Events, and Hell Events are the most consistent free channels for resources and speed-ups — treat them as a daily checklist, not optional extras.

> **ADVANCED:** A "farm account" is a secondary account built purely to produce and feed resources into a main account or guild effort. Common in competitive guilds preparing for KvK.

---

## 5. Heroes

Heroes are the backbone of combat, gathering efficiency, and account growth — Lords Mobile has grown to well over 50 Heroes across years of updates.

### Rarity tiers
Heroes are graded on a five-tier color scale (naming varies slightly by source, functionally identical):
**White/Grey → Green → Blue → Purple → Gold/Yellow** (Gold/Yellow = top rarity).

### Hero classes
Heroes are divided into three RPG-style archetypes: **Strength, Dexterity, Intelligence** — roughly mapping to tank, damage, and support roles.

### Hero skills — three categories
| Skill type | Behavior |
|---|---|
| **Tactical** | One unique skill per Hero; only active while that Hero is placed in an active battle team. |
| **Logistical** | Only active while the Hero is in an active battle team. |
| **Administrative** | Passive and always-on the moment the Hero is recruited — regardless of team slot (e.g., permanent Construction/Research/Gathering Speed boosts). |

### Hero talents
A talent tree split into two branches, filled with points earned on Hero level-up:
- **Military (left branch):** combat stats — Squad HP/Defense/Attack bonuses, troop-type Offense bonuses.
- **Economy/Administrative (right branch):** Construction Speed, Research Speed, Training Speed, Gathering Speed.

> **PRIORITY:** Early game, max **Construction Speed** and **Research Speed** talents first, then fill Training and Gathering Speed. War prep should shift into the Military branch — max Squad HP/Defense bonuses before spreading points into individual troop-type Offense bonuses.

### Leveling
- Heroes gain EXP by fighting in your active team (including Hero Stages) or via EXP items earned from sweeping stages.
- **A Hero's level is capped by your own player level** — you can't out-level your own account through Heroes alone.

### Hero Stages (core PvE progression)
The main campaign for unlocking Heroes for free. Completing/sweeping a stage grants Player EXP, Trophies, Shards, and Blueprints — Shards and Trophies are spent to raise a Hero's Rank. Completing Hero Stages is required to unlock most non-paywalled Heroes.

### 2025–2026 meta picks (community consensus, verify against current patch notes before publishing)
| Hero | Why |
|---|---|
| **Rose Knight** | Considered the top overall F2P pick; strong in Hero Stages, Colosseum, and army-focused play. |
| **Trickster** | ~25% Research Speed talent — a top priority to rush to Gold rarity; also strong for Monster Hunting. |
| **Prima Donna** | Core Colosseum/army support pick. |
| **Tracker** | Strong burst damage; used in Hero Stages, Colosseum, and physical Monster Hunting lineups. |
| **Death Knight** | Tanky defensive pick. |
| **Sage of Storms** | Administrative buff — boosts Construction Speed. |

A frequently cited winning Colosseum lineup: **Rose Knight / Prima Donna / Trickster / Death Knight / Black Crow.**

### Hero Equipment (Gear)
- **8 total equipment slots**: 6 standard slots + 1 accessory slot that can hold up to 3 combined items once the Workshop reaches Level 25.
- **Grade tiers:** Common → Rare → Epic → Legendary → **Mythic** (requires the "Breakthrough" research + Blazing Embers). Mythic gear Level 50+ can be further "Tempered" using **Astralite** for extra stats.
- **Upgrade materials** mainly come from Monster Hunting and Hero Stage completion.
- **Blazing Embers**: from Special Bundles, Cargo Ship trades, Kingdom Tycoon rewards, event rewards, and Ember Chests (Mall/Bargain Store).
- **Astralite**: from the Exchange Extravaganza event, Bargain Store, or Mall bundles.
- **Quick Swap**: lets you save and instantly swap between full gear sets (e.g. a Construction set vs. a War set); more slots unlock via research, each new set requires an Equipment Quill.

> **ADVANCED:** Keep at least two Quick Swap gear sets ready — one optimized for Construction/Research speed during peacetime, one optimized for combat stats before KvK or a guild event.

---

## 6. Troops & Combat

### Troop types
Four types: **Infantry, Ranged, Cavalry** (soldiers), and **Siege Engines** (machines).

**Counter system (rock-paper-scissors):**
**Infantry beats Cavalry → Cavalry beats Ranged → Ranged beats Infantry.** Siege Engines counter Castle Walls and Traps rather than other troop types directly.

**Relative strengths:**
| Type | Best at |
|---|---|
| Infantry | Highest HP/Defense (tankiest) |
| Siege | Highest Attack, and highest gathering/carrying capacity |
| Cavalry | Fastest travel speed |
| Ranged | Balanced, exploits Infantry |

### Troop tiers
The current system tops out at **Tier 5** (not T1–T11 — an important correction from older assumptions):

| Tier | Infantry | Ranged | Cavalry | Siege |
|---|---|---|---|---|
| T1 | Grunt | Archer | Cataphract | Ballista |
| T2 | Gladiator | Sharpshooter | Reptilian Rider | Catapult |
| T3 | Royal Guard | Stealth Sniper | Royal Cavalry | Fire Trebuchet |
| T4 | Heroic Fighter | Heroic Cannoneer | Ancient Drake Rider | Destroyer |
| T5 | Luminary Guard | Luminary Marksman | Luminary Lion Force | Luminary Avenger |

Tier 5 ("Luminary") troops are upgraded directly from Tier 4 using **Luminous Gears**, crafted in the **Lunar Foundry** — each Gear adds 12 Might.

Relative power scaling (per-unit, vs. Tier 1 baseline): **T2 ≈ 2×, T3 ≈ 3×, T4 ≈ 4.5×, T5 ≈ 6×.**

### Research gates for tiers
Roughly: T2 requires Academy Level 9, T3 requires Academy Level 17, T4 requires Academy Level 25, T5 requires Academy Level 25 plus Crafting Speed II and Crafting Capacity both at Level 10.

### Combat mechanics
- Battles last exactly **40 seconds**.
- Troop attack cooldown is 3 seconds, except each unit's very first attack, which fires after only 1 second.
- Troops are organized into **4 squadrons per type** in battle.
- Travel time: Scouts move at 60% of the listed travel time; Familiars move at 20%.
- **Army Lineup** (a research unlock) lets you choose which troop type stands on the frontline, changing which type absorbs the first hit.

> **TIP:** Don't mass-train low-tier troops you'll have to replace soon. Once you can research the next tier, shift training toward it rather than stockpiling units that will be obsolete within weeks.

> **MISTAKE TO AVOID:** Training troops evenly across all four types without a plan wastes resources. Decide your account's role (attacker, trap/defense, gatherer) and weight troop training accordingly.

---

## 7. Research (Academy)

The Academy research tree has seven top-level categories:
**Economy, Defense (with an Upgrade Defenses sub-branch), Military (with Upgrade Military / Army Leadership / Military Command / Mana Awakening sub-branches), Monster Hunt, Familiars (with a Familiar Battles sub-branch), Wonder Battles (with Advanced Wonder Battles / Sigils sub-branches), and Gear.**

### Priority order
Community consensus, repeated across nearly every guide: **Development/Economy research first, Military research a distant third priority.**

Rationale: Economy research boosts Construction Speed, Resource Production, Army Capacity, Gem Gathering Speed, and Resource Gathering Speed — all of which compound over time, unlike one-off Military stat bumps.

- **Defense research** improves trap attributes, Wall repair speed, and Trap-building speed, and unlocks the ability to repair (rather than rebuild) traps destroyed in battle.
- **Research Speed** bonuses are especially valuable because they apply to every future project — small percentage boosts pay off enormously over the game's very long research tree (some late-game research projects take well over 100 days at base speed).
- **Breakthrough** research is the specific unlock required to raise gear to Mythic grade.

> **PRIORITY:** Recommended overall order — **Development → Economy → (much later) Military.** Pulling resources into Military research too early is one of the most commonly cited beginner mistakes.

---

## 8. Guild System

Guilds are the core social and cooperative unit — widely described as "the main source of strategy" in the game.

### Ranks
Guild ranks run from **Rank 5 (Leader)** down to **Rank 1**. Rank 4 members typically handle admin duties like managing the Guild Fest quest board and approving/removing members.

### What guilds unlock
- **Guild Events**: Guild Fest, Dragon Arena, Guild Bash, Guild Showdown, Guild Expedition, Darknest Crusade, Chaos Arena.
- **Guild Help**: speeding up guildmates' construction/research.
- **Cooperative Monster Hunting** and **Coalition Rallies** (multi-player joint attacks).
- **Reinforcements/Garrisons**: defensive troop-sharing between members.
- **Wonder contests**: fighting for control of map bonus points.
- **Guild Shop**: purchased with Guild Coins; sells rare-material chests and items like the Kingdom Migration Scroll.
- **Guild Gifts**: rewards shared with all members once the guild collectively hits a milestone (Monster Hunting, member purchases, event thresholds). **Must be claimed within 24 hours or they expire.**
- **Trading Post**: the actual resource-gifting mechanism between guildmates (Castle 5+).

> **PRIORITY:** Join an active guild as early as possible. Delaying this is one of the single biggest brakes on early growth — you lose out on resource help, speed-ups, and protection.

---

## 9. Kingdom vs Kingdom (KvK)

Officially called **Kingdom Clash**, commonly shortened to **KvK** — a large-scale event where 2–4 Kingdoms compete directly.

### The basics
- Duration: roughly a 24-hour event window.
- Eligibility: only Kingdoms older than 90 days; unavailable in newly-protected Kingdoms.
- Historical scheduling pattern: roughly every third week, just before Guild Fest begins (confirm current cadence in-game before publishing an exact schedule).
- Players use a **Relocator** or **Random Relocator** to teleport into a rival Kingdom for a set **Battle Period**, then are automatically returned home afterward at a random location.

### How points are scored
| Method | Example values |
|---|---|
| **Occupy Wonders** | Command a Base (1 min) = 100,000 pts · Reinforce a Base (1 min) = 50,000 · Command a Fort (1 min) = 20,000 · Reinforce a Fort = 10,000 |
| **Kill enemy soldiers** | T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12 |
| **Destroy enemy traps** | T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12 |
| **Hunt monsters in rival Kingdom** | Lv1 kill = 1,000 pts (hit = 300) up to Lv5 kill = 300,000 pts (hit = 3,600) |
| **Gather resources in rival Kingdom (per 1,000 units)** | Food = 120 · Stone = 180 · Timber = 180 · Ore = 240 · Gold = 330 |

If 3–4 Kingdoms compete, a rotating "featured" rival Kingdom offers double points for Wonder occupation, kills, and trap destruction.

### Score thresholds (Solo War chests, scale by Castle level)
| Castle level | 2–3 Kingdom format | 4 Kingdom format |
|---|---|---|
| 25 | 1,800,000 pts | 2,700,000 pts |
| 22–24 | 864,000 pts | — |
| 18–21 | 270,000 pts | — |
| 13–17 | 180,000 pts | — |
| 8–12 | 90,000 pts | — |

Top-tier rewards (Castle 25 phase) include up to **6,000 Gems** plus large resource/speed-up bundles. Guild-wide cumulative thresholds (3.15M / 8.4M / 21M points) also unlock Uncommon/Rare/Epic **Guild War Chests** shared across the guild.

### After KvK
- **Gem Lodes** spawn in the defeated Kingdom(s) the day after, gatherable like normal tiles — starting at Level 1, scaling up to Level 5, spawning roughly every 6 hours.
- Wonders leave Protection Phase entirely during KvK; whichever guild holds one when it ends has its leader become the new owner, and the Wonder re-enters Protection Phase for 5–6 days.

> **ADVANCED:** Gather in small batches (roughly 350K resources at a time) during KvK to limit losses if you're hit while out gathering on enemy territory.

> **TIP:** Only send as many gatherers/attackers into a rival Kingdom as your Infirmary can safely absorb if things go wrong.

---

## 10. Guild Showdown & Guild-vs-Guild

### Guild Showdown
A **weekly, 16-guild single-elimination tournament**:
- Round structure: 8 first-round matchups → 4 winners advance → 2 winners face off for the championship (4 total rounds).
- Within each matchup, individual members fight 1-on-1 in ascending Might order — weakest members go first, escalating toward the strongest. Each winning member keeps their surviving army for the next fight (a gauntlet format).
- **No permanent losses**: troops and Heroes in Guild Showdown cannot be wounded or killed — it's a fully "safe" competitive mode.
- Rewards scale with Division/Tier and final rank.

### Guild Duel (newer feature, verify before publishing)
A more recently added mode reportedly involving a dedicated research tree, a "Duel Archaic Tome," and Army Boosts. Detailed mechanics weren't confirmed in text sources during this research pass — worth a quick in-game check before writing a full page on it.

> **TIP:** Guild Showdown is the safest place to test aggressive team comps — since there's no permanent loss risk, it's a good weekly opportunity to experiment.

---

## 11. Colosseum (PvP Arena)

- Unlocked at **Castle Level 10**.
- Players field up to **5 Heroes** in an auto-battle against another player's preset defense team — matches happen only **within your own Kingdom**.
- Battles **auto-resolve instantly** on deploy; leaving the screen doesn't change the outcome.
- **Ranking mechanic**: beating a higher-ranked opponent swaps your ranks; climbing gets harder (smaller rank gains) the closer you get to the top.
- Rankings and Gem rewards recalculate every 3 hours; the #1 player in a Kingdom can earn roughly 500 Gems per cycle.
- **5 entries reset daily.** Victories also grant Hero EXP.

**Meta Heroes**: Rose Knight, Prima Donna, Demon Slayer, Lore Weaver (healer), Grove Guardian, Witch Doll, Trickster, Black Crow.

> **TIP:** Balance tank / damage / support roles in your Colosseum team rather than stacking pure damage-dealers — a common beginner mistake that loses to well-rounded comps.

---

## 12. Familiars (Pets)

*(Corrected terminology: the community term "Beast Keeper" refers to what's now officially called the Familiar system, centered on the Monsterhold building.)*

### Growth stages
| Stage | Max level | Unlocks |
|---|---|---|
| Hatchling | 20 | 1st skill |
| Adult | 50 | 2nd skill |
| Elder | 60 | 3rd (final) skill |

A Familiar's level cannot exceed your own player level.

### Key buildings
Monsterhold (hub), Spring (produces Anima), Mystic Spire (merges Anima + items into Pacts/Skillstones), Gym (co-trains Heroes and Familiars).

### Pacts
The mechanism for summoning/enhancing Familiars, informally tiered by the community:
- **Pact 1B**: notable for producing **Aquiris**, widely considered the best Familiar — reportedly worth ~180 Stamina/day at max strength (roughly 3,000 Gems/day of equivalent value).
- **Pact 3**: many good general-growth passive/skill options.
- **Pact 4**: very powerful, but with a significant resource and time cost.

### Events
The **Familiar Workout** event grants a +50% EXP boost for leveling Familiars — the best window to invest heavily in pet progression.

> **PRIORITY:** Save Familiar EXP items/resources for Familiar Workout events instead of spending them at random — the +50% boost effectively doubles your investment's value.

---

## 13. Monster Hunting & Darknests

### World-map monsters
- **5 levels (Lv1–Lv5)**, Lv1 easiest. Levels 1–4 spawn anywhere on the map; Level 5 spawns specifically near the Kingdom's center.
- Must be in a guild to hunt monsters.
- Each hit has roughly a 20% chance to drop a rare material (25% for Level 5 monsters).
- Rewards: Gems, Shields, Speed-ups, Hero/Monster Chests, Hero EXP, and gear-upgrade materials.
- The in-game **Monster Manual** (tap the "i" icon) shows each monster's strengths/weaknesses to help pick your Hero lineup.

### Darknests
Separate from regular wilds monsters — procedurally-placed "enemy castles" scattered across the map.
- **5 Darknest levels**, each yielding its own **Dark Essence** (internal scale 1–25).
- Defeating one awards Dark Essence, convertible in the **Transmutation Lab** for Gems, resources, or speed-ups (bigger rewards at higher Essence levels).
- **Guild Bash** gates which Darknest levels are accessible, based on the guild's own Guild Bash Level. "Slayer Loot" (a bonus chest) goes to whoever lands the finishing blow.

> **TIP:** Rally difficulty scales with Dark Essence level — solo hunters should prioritize monsters weak to Agility-type Heroes, generally the easier match-up.

---

## 14. Traps & City Defense

- **Traps are built onto the Castle Wall.** Upgrading the Wall increases its HP, repair rate, and maximum trap capacity.
- While the Wall holds, it absorbs hits and traps deal passive damage to attackers — the longer it holds, the more cumulative trap damage attackers take.
- **Garrison**: sending your own troops to defend a guildmate's castle. Invaders must fight through Garrison troops first — but Garrison troops do **not** benefit from the host's Wall/Traps.
- **Reinforcement**: placing your troops *inside* a guildmate's defenses — these troops *do* benefit from the host's Wall, Traps, and buffs.
- **Protection options**: a **Shield** fully protects your Turf from attack (costly to run continuously); a **Shelter** is a free mechanic to tuck troops safely away without a shield.
- **Watchtower** at Level 25 unlocks "Fortify," reducing attacking troops' ATK by 10%.
- Traps themselves have tiers (roughly T1–T4) matching the troop-tier destroy-point values used in KvK scoring.

### Trap accounts (advanced archetype)
A well-known community strategy: build an account that looks weak (low visible Might, minimal visible offense) while secretly maximizing trap capacity and Wall HP — baiting overconfident attackers into catastrophic troop losses.

> **ADVANCED:** Rough trap-conversion ratios cited by trap-account guides: 1 T4 troop ≈ 1.5 T3 ≈ 2.25 T2 ≈ 4.5 T1 (verify current ratios in-game, as these shift with balance updates).

> **MISTAKE TO AVOID:** Don't assume Shield = safety net for everything. It protects against direct attacks but doesn't help troops caught out gathering — plan troop deployment separately from your Shield timing.

---

## 15. VIP System

- **Every player is automatically VIP** — it's a universal progression track, not an opt-in program.
- **15 total VIP levels.**
- Points earned via: daily login (600 VIP points/day), directly spending Gems, and gift codes during events.
- The points required roughly **doubles at each successive level** — higher levels get dramatically more expensive.

### Key milestones
| Level | Unlock |
|---|---|
| VIP 7+ | Auto-complete for Admin Quests |
| VIP 9 | Player EXP Boost reaches 50% and stays flat at 50% for all higher levels |
| VIP 15 (max) | VIP Point items can no longer be used/resold; daily free 600-point login bonus stops — the track is fully closed out |

Higher VIP levels also increase the number of Admin/Guild Quests available and grant free daily instant-complete acceleration time for queues.

---

## 16. Events Calendar

### Guild Events
Chaos Arena, Darknest Crusade, Dragon Arena, Guild Bash, Guild Expedition, Guild Fest, Guild Showdown.

### Kingdom Events
Kingdom Clash (KvK), Lords Cup.

### Monster Events
Code 66, Phantom Pains.

### Turf (individual) Events
24h Challenge, Hell Event, Solo Event, Bargain Store, Labyrinth Alert, Limited Challenge, Super Gem Time.

### Wonder Battle Events
Battle Royal, Feudal War, War for the Chalice, War of Wonders.

### Guild Fest (detail)
A **7-day event**, typically held shortly after KvK. Structure: 2 Solo Quest slots + 20 Guild Quest slots on a shared board, with hundreds of possible quests worth roughly 93–319 points each (e.g. hitting monsters, completing Hero Stages, gathering, hitting high-level Darknest Essences, training troops, completing Hell Events). Extra quest attempts can be bought for 1,000 Gems each after the free ones run out.

> **F2P:** Guild Fest rewards don't always match the spend needed to hit competitive score thresholds — treat it as a nice bonus, not a must-win event, if you're not investing real money.

---

## 17. F2P Strategy & Spending Guide

### Reality check
Spending real money provides a genuine, significant competitive edge in Lords Mobile — some top accounts are documented spending tens of thousands of dollars or more. Progression without any spending is noticeably slower, especially late-game.

### Is F2P viable?
Yes, but it requires patience. The game is designed to reward **consistent, well-informed play over a long timeline** rather than short bursts — especially relevant given the game's 10+ year lifespan. Recommended F2P posture:
- Stay under protective Shields rather than exposing yourself to aggressive PvP.
- Focus on steady account growth: stack Research Speed and Construction Speed, lean on guild cooperation, and participate consistently in free events.
- Avoid trying to compete head-on with whale accounts in direct combat — compete instead on efficiency, event participation, and community/guild value.

### If you do spend
- Gem pricing in the shop ranges roughly from $1.99 for 280 Gems up to $99.99 for 22,000 Gems as straight currency — poor value compared to bundles.
- **One-time bundle offers tend to give the best value**; **recurring subscription-style packs are mostly weak value**; straight gem purchases should be a last resort.

> **F2P:** If you ever do spend, prioritize one-time value bundles over recurring subscriptions or straight Gem purchases — they consistently offer more for the price.

---

## 18. Common Mistakes to Avoid

1. **Not joining an active guild early** — guilds provide resource help, speed-ups, and protection; delaying costs real growth.
2. **Over-training low-tier troops** — they become obsolete fast; train toward the next tier once it's researchable rather than stockpiling units you'll replace.
3. **Neglecting Hero upgrades** — Heroes drive combat, gathering, and overall efficiency. Prioritize administrative Heroes like Trickster (Research Speed) and Sage of Storms (Construction Speed) early.
4. **Spreading resource production evenly** instead of hyper-focusing one resource type, which better matches the large single-resource demands of guild warfare.
5. **Researching Military tech too early**, pulling resources away from faster-compounding Economy research.
6. **Letting speed-ups and queues sit unused** — construction/research/training should always be running.
7. **Ignoring Infirmary capacity** relative to troops sent out gathering or attacking.
8. **Not using Shield/Shelter appropriately** for your account's stage, especially as an F2P player trying to avoid being farmed by veterans.
9. **Wasting the Novice Relocator window** (first 7 days / Castle ≤5) by not considering a Kingdom move if you land somewhere unfavorable.

---

## 19. Glossary

| Term | Meaning |
|---|---|
| **KvK** | Kingdom vs Kingdom / "Kingdom Clash" — the multi-kingdom warfare event |
| **Might** | A player's overall power score, used to compare account strength |
| **Rally / Coalition** | A multi-player joint attack against an enemy Turf, Wonder, or Darknest |
| **Garrison** | Sending troops to defend a guildmate's castle; they absorb the first hit but don't benefit from the host's Wall/Traps |
| **Reinforce / Reinforcement** | Sending troops inside a guildmate's defenses, gaining the benefit of their Wall, Traps, and buffs |
| **Shield** | A purchasable/earnable item that fully protects a Turf from attack for a set duration |
| **Shelter** | A free mechanic to protect troops without a Shield |
| **Darknest** | A procedurally-placed enemy castle on the map, defeated for Dark Essence rewards |
| **Wonder** | A contestable map structure guilds fight to control for ongoing bonuses |
| **C25 / "Castle 25"** | Shorthand for reaching the maximum Castle level, a major progression milestone |
| **Trap account** | An account built to look weak but hide maximum trap/defense capacity, baiting attackers into losses |
| **Farm account / Hyper farm** | An alt account built purely to produce resources, often one dominant type |
| **Whale** | A player who spends very large amounts of real money to accelerate progress |
| **Zeroed** | Being decisively defeated in an attack, losing most/all deployed troops |
| **Tile hitting** | Attacking a player's gathering troops sitting on a resource tile — common during KvK |
| **VIP** | The universal 15-level player progression track granting speed-ups and perks |
| **Talent points** | Points earned on Hero level-up, spent in the Hero Talent tree |
| **T1–T5** | Troop Tier shorthand (current cap is Tier 5, the Luminary line) |
| **Familiar** | The current official term for "pets" in Lords Mobile |

> **Note:** the abbreviations "SnE" and "HBM," sometimes seen in other strategy-game communities, could not be verified as standard Lords Mobile terminology — leave them out unless confirmed first-hand by active players.

---

## Sources consulted during research

- [Lords Mobile Fandom Wiki](https://lordsmobile.fandom.com/wiki/Lords_Mobile) (primary source for structural/numeric data: Troop, Equipment, Kingdom Clash, Watchtower, VIP Level, Guild, Guild Gift, Colosseum, Monsterhold, Research, Events template pages)
- [Wikipedia — Lords Mobile](https://en.wikipedia.org/wiki/Lords_Mobile)
- [Wikipedia — IGG Inc.](https://en.wikipedia.org/wiki/IGG_Inc.)
- [Theria Games guide hub](https://theriagames.com/guide/) (resource management, troops & counters, research priorities, guild & social play, KvK, Guild Fest, F2P vs P2W, mistakes to avoid)
- [marksangryreview.com](https://marksangryreview.com/) (Castle 25 guide, Talents, KvK definitive guide, Guild Showdown guide, win the Colosseum, Darknest guide, defensive strategy, trap account guide, garrison/shelter guides, top packs guide, beginner tips)
- [Empire Build Academy](https://www.empirebuildacademy.com/) (2026 beginner F2P guide, heroes guide, research strategies)
- [BlueStacks Lords Mobile guides](https://www.bluestacks.com/blog/game-guides/lords-mobile/) (kingdom moving, hero synergies, monster hunting)
- [lordsmobile.org](https://lordsmobile.org/) (trap accounts, attack & defense, Guild Showdown FAQ, Familiar System FAQ)
- [PocketGamer.biz — Lords Mobile monetization](https://pocketgamer.biz/asia/the-iap-inspector/66933/how-does-lords-mobile-monetise)
- [Udonis — Lords Mobile monetization analysis](https://www.blog.udonis.co/mobile-marketing/mobile-games/lords-mobile-monetization)
- [ingamenews.com — 10th anniversary coverage](https://www.ingamenews.com/2026/02/igg-announces-lords-mobile-10th.html)
