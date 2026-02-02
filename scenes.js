const STATE = {
  START: "START",
  INSTR: "INSTR",
  HUB: "HUB",
  PUSHUPS: "PUSHUPS",
  RUN: "RUN",
  REST: "REST",
  BOSS: "BOSS",
  END: "END",
};

let game = {
  state: STATE.START,
  day: 1,
  maxDays: 3,
  health: 60,
  level: 1,
  ending: "",
};

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

function resetGame() {
  game.state = STATE.START;
  game.day = 1;
  game.health = 60;
  game.level = 1;
  game.ending = "";
}

function applyChoice(choice) {
  if (choice === "pushups") {
    game.level += 1;
    game.health -= 8;
    game.state = STATE.PUSHUPS;
  } else if (choice === "run") {
    game.level += 1;
    game.health -= 12;
    game.state = STATE.RUN;
  } else if (choice === "rest") {
    game.health += 15;
    game.state = STATE.REST;
  }

  game.health = clamp(game.health, 0, 100);
}

function nextDayOrBoss() {
  game.day += 1;
  if (game.day > game.maxDays) game.state = STATE.BOSS;
  else game.state = STATE.HUB;
}

function computeEnding() {
  if (game.health <= 0) game.ending = "Overtrained Ending";
  else if (game.level >= 4 && game.health >= 50)
    game.ending = "S-Rank Awakening Ending";
  else if (game.level >= 4 && game.health < 50)
    game.ending = "Glass Cannon Ending";
  else if (game.level <= 2 && game.health >= 70)
    game.ending = "Healthy Beginner Ending";
  else game.ending = "Steady Growth Ending";

  game.state = STATE.END;
}
