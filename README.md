# Unsent: The Micro-Confession Sprint

[![Competition](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Kh43t/unsent-micro-confession/rank.svg)](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Kh43t/unsent-micro-confession/reward.svg)](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

Entry for the [Unsent: The Micro-Confession Sprint](https://make.fun/competitions/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba) competition on [make.fun](https://make.fun).

## The entry

A two-part micro-confession: a `To:` line naming who the unsent message was meant for, and the message itself, written exactly as it was typed. This one stayed in drafts because there is no one left to send it to — the recipient is gone, and the voicemail is all that remains of her voice.

## How it works

`main.ts` is a small deterministic program. It writes the confession to `/output/entry.txt` (exactly two lines, no trailing newline) and does nothing else — no network, no secrets, no reading anything outside this repository.

Run it with Node 22 or later:

```sh
node main.ts
```
