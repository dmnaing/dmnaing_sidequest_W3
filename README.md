## Project Title

GBDA302 Week 3:Train to Awaken (Side Quest 3 — Branching Interactive Story)

---

## Authors

Min Htet Naing, dmnaing (21008098)

---

## Description

Train to Awaken is a simple Solo-Leveling-inspired interactive story built in p5.js. The player is a normal human trying to “awaken” by choosing daily training actions. Each choice changes player stats (Health + Level), and the story branches into different scenes and endings based on those stats.

The story is structured using multiple game states (screens) and multiple files. The player makes decisions in a Training Hub, moves through short “scene” screens (Push-ups / Run / Rest), and then enters a final Gate (boss check) where the ending is unlocked based on the tracked stats.

---

### Controls

- Mouse: click buttons to navigate / choose actions
- Keyboard shortcuts (if implemented):
  - Enter = Start
  - I = Instructions
  - Esc / B = Back
  - R = Restart on ending

---

## Learning Goals

- Build a branching interactive story using multiple game states
- Organize a p5.js project across multiple files (one file per screen or screen group)
- Route draw() and input (mouse/keyboard) based on the current game state
- Track at least one player stat across scenes and unlock different endings

---

## Game Structure (States)

Example state flow:

Start → Instructions (optional) → Training Hub  
Training Hub → (Push-ups OR Run OR Rest) → back to Hub  
After final day → Gate (final check) → Ending (based on stats)

Player stats tracked:

- Health (goes down when training, goes up when resting)
- Level (goes up when training)

---

## Assets

- No external assets used (shapes + text only)

---

## GenAI

I used GenAI (ChatGPT) to help:

- brainstorm the state diagram and branching structure
- ask the code to design and structure the game

---
