let buttons = [];

function setup() {
  createCanvas(900, 520);
  textFont("monospace");
}

function draw() {
  drawAnimatedBackground(11, 15, 26);
  buttons = [];

  // Router: call the right screen draw function
  if (game.state === STATE.START) drawStartScreen();
  else if (game.state === STATE.INSTR) drawInstructionsScreen();
  else if (game.state === STATE.HUB) drawHubScreen();
  else if (game.state === STATE.PUSHUPS) drawPushupsScreen();
  else if (game.state === STATE.RUN) drawRunScreen();
  else if (game.state === STATE.REST) drawRestScreen();
  else if (game.state === STATE.BOSS) drawBossScreen();
  else if (game.state === STATE.END) drawEndScreen();

  for (const b of buttons) b.draw();
}

function mousePressed() {
  for (const b of buttons) b.click();
}

function addButton(label, x, y, w, h, onClick) {
  buttons.push(new UIButton(label, x, y, w, h, onClick));
}
