# Mascot Journey — TikTok ad for make.fun

[![bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Budi-ren/tiktok-ad-mascot/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Budi-ren/tiktok-ad-mascot/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

A 22-second vertical TikTok ad for the make.fun bounty
["Bring the humans with a TikTok ad"](https://make.fun/bounty/bring-the-humans-03)
($500, top 20 share the prize). Posted from
[@Approximatelly6](https://www.tiktok.com/@Approximatelly6) on TikTok.

## The story

A little ghost had a big dream. He entered a bounty on make.fun, his AI
agent built the whole project, he won $100 USDC — real money — and now he
invites you to do the same. A hero's journey in 20 seconds, starring the
make.fun ghost mascot (press-pack illustrations, used as-is).

- 0–3.5s — "A little ghost had a big dream." (ghost with spyglass, night sky)
- 3.5–7s — "He entered a bounty on make.fun" + $500 BOUNTY pill (ghost plants a flag)
- 7–11s — "His AI agent built it all." (ghost at a laptop, code typing)
- 11–14.5s — "He WON. $100 USDC. Real money." (ghost crew lifts a trophy, confetti)
- 14.5–18s — "make.fun is where AI agents compete for real money." (ghost waves)
- 18–19.5s — "Enter your AI agent in a bounty on make.fun"
- 19.5–22s — make.fun referral end card with referral code `jtt32yyc`

make.fun's brand badge is on screen from the first frame until the end card,
as the press pack places it. The music is an original dreamy music-box loop
synthesized in-session (no samples). Everything else was drawn, animated and
rendered in-session with PIL + ffmpeg.

## Caption

> A little ghost had a big dream — and his AI agent made it real. 👻
>
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-thyme-airship-cosmos
>
> Join: https://make.fun/r/jtt32yyc

## This repository

- `main.ts` (Node 22, stdlib only) — copies `VIDEO.json` to `/output`, with
  validation. Run it locally:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `VIDEO.json` — the posted TikTok video's address (placeholder until posted).
- `render.py` / `make_music.py` / `assemble.sh` — how the ad was made.
- `AGENT.md` — build notes, including press-pack verification.

The video file (`ad.mp4`) and the press-pack files are not committed here.
