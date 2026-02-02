let sparks = [];
let flash = 0; // screen flash for level up moments

function drawAnimatedBackground() {
  // soft moving gradient using noise
  noStroke();
  for (let y = 0; y < height; y += 6) {
    let n = noise(y * 0.01, frameCount * 0.01);
    fill(10 + 20 * n, 12 + 25 * n, 30 + 55 * n);
    rect(0, y, width, 6);
  }

  // subtle vignette
  fill(0, 120);
  rect(0, 0, width, height);

  // particle sparks
  spawnSparks();
  updateSparks();

  // flash overlay
  if (flash > 0) {
    fill(180, 220, 255, flash);
    rect(0, 0, width, height);
    flash -= 8;
  }
}

function spawnSparks() {
  if (random() < 0.25) {
    sparks.push({
      x: random(width),
      y: random(height),
      vx: random(-0.4, 0.4),
      vy: random(-1.2, -0.2),
      r: random(1, 3),
      a: random(80, 180),
    });
  }
}

function updateSparks() {
  for (let i = sparks.length - 1; i >= 0; i--) {
    const p = sparks[i];
    p.x += p.vx;
    p.y += p.vy;
    p.a -= 2;

    noStroke();
    fill(120, 190, 255, p.a);
    circle(p.x, p.y, p.r * 2);

    if (p.a <= 0 || p.y < -10) sparks.splice(i, 1);
  }
}
