function drawHUD() {
  // top panel
  noStroke();
  fill(15, 20, 40, 220);
  rect(0, 0, width, 80);

  // labels
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(16);
  text(`Day: ${game.day}/${game.maxDays}`, 20, 22);
  text(`Level: ${game.level}`, 20, 52);

  // HEALTH BAR
  const bx = 210,
    by = 18,
    bw = 260,
    bh = 18;
  fill(255, 255, 255, 30);
  rect(bx, by, bw, bh, 8);

  const hpW = map(game.health, 0, 100, 0, bw);
  fill(90, 220, 160, 200);
  rect(bx, by, hpW, bh, 8);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(12);
  text(`HEALTH ${game.health}/100`, bx + bw / 2, by + bh / 2);

  // LEVEL BAR (fake XP progress just for looks)
  const lx = 210,
    ly = 46,
    lw = 260,
    lh = 14;
  fill(255, 255, 255, 30);
  rect(lx, ly, lw, lh, 8);

  // make progress based on day + level
  const prog = clamp((game.level - 1) * 0.28 + (game.day - 1) * 0.18, 0, 1);
  fill(120, 190, 255, 200);
  rect(lx, ly, lw * prog, lh, 8);

  fill(255, 255, 255, 200);
  textAlign(CENTER, CENTER);
  textSize(11);
  text("SYSTEM SYNC", lx + lw / 2, ly + lh / 2);

  // warning text
  if (game.health <= 20) {
    fill(255, 130, 130);
    textAlign(RIGHT, CENTER);
    textSize(14);
    text("LOW HEALTH — REST!", width - 20, 52);
  }
}

function drawHubScreen() {
  drawHUD();

  // card panel (THIS USED TO BE OUTSIDE A FUNCTION — caused blank/crash)
  drawCard(70, 110, width - 140, 190);
  drawCharacterSilhouette(160, 250);

  fill(255);
  textAlign(LEFT, CENTER);
  textSize(28);
  text(`Training Plan (Day ${game.day})`, 230, 165);

  fill(220);
  textSize(15);
  text("Pick ONE action. Balance growth and recovery.", 230, 205);

  addButton("Do Push-ups (+Lvl, -Health)", 120, 360, 250, 55, () =>
    applyChoice("pushups"),
  );
  addButton("Go Run (+Lvl, -More Health)", 390, 360, 280, 55, () =>
    applyChoice("run"),
  );
  addButton("Rest (+Health)", 690, 360, 170, 55, () => applyChoice("rest"));
}

function sceneTemplate(title) {
  drawHUD();

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(title, width / 2, 150);

  fill(220);
  textSize(16);
  textAlign(CENTER, TOP);
  text(`Level: ${game.level}\nHealth: ${game.health}`, width / 2, 210);
}

function drawPushupsScreen() {
  sceneTemplate("Push-up Session");
  addButton("Continue", width / 2 - 110, 400, 220, 55, () => {
    if (game.health <= 0) computeEnding();
    else nextDayOrBoss();
  });
}

function drawRunScreen() {
  sceneTemplate("Night Run");
  addButton("Continue", width / 2 - 110, 400, 220, 55, () => {
    if (game.health <= 0) computeEnding();
    else nextDayOrBoss();
  });
}

function drawRestScreen() {
  sceneTemplate("Recovery Day");
  addButton("Continue", width / 2 - 110, 400, 220, 55, () => nextDayOrBoss());
}

/**
 * IMPORTANT FIX:
 * All the “Gate ring” drawing code MUST be inside a function.
 * main.js routes to drawBossScreen() when game.state === STATE.BOSS.
 */
function drawBossScreen() {
  drawHUD();

  // Gate ring
  push();
  translate(width / 2, height / 2 + 20);
  noFill();
  stroke(120, 190, 255, 180);
  strokeWeight(6);
  circle(0, 0, 220);

  stroke(120, 190, 255, 60);
  strokeWeight(2);
  for (let i = 0; i < 18; i++) {
    const a = i * (TWO_PI / 18) + frameCount * 0.01;
    const r1 = 120,
      r2 = 150;
    line(cos(a) * r1, sin(a) * r1, cos(a) * r2, sin(a) * r2);
  }
  pop();

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("DUNGEON GATE", width / 2, 140);

  fill(220);
  textSize(16);
  text("One attempt. Your stats decide your fate.", width / 2, 190);

  // button to compute ending
  addButton("Enter Gate", width / 2 - 110, 400, 220, 55, () => {
    computeEnding();
  });
}

function drawCharacterSilhouette(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(0, 0, 0, 120);

  // shadow blob
  ellipse(0, 60, 90, 22);

  // body
  fill(30, 40, 90, 200);
  rect(-18, 10, 36, 55, 12);

  // head
  fill(35, 45, 110, 220);
  circle(0, -5, 34);

  // “cape”
  fill(20, 25, 60, 200);
  triangle(-18, 20, -55, 70, -10, 70);

  pop();
}

function drawCard(x, y, w, h) {
  noStroke();
  fill(255, 255, 255, 25);
  rect(x, y, w, h, 18);
  stroke(255, 255, 255, 30);
  strokeWeight(2);
  noFill();
  rect(x, y, w, h, 18);
}
