function drawStartScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("TRAIN TO AWAKEN", width / 2, 150);

  fill(220);
  textSize(16);
  text(
    "Choose workouts. Track Health + Level. Endings unlock based on stats.",
    width / 2,
    220,
  );

  addButton("Start", width / 2 - 90, 360, 180, 50, () => {
    game.state = STATE.HUB;
  });

  addButton("How to Play", width / 2 - 90, 420, 180, 50, () => {
    game.state = STATE.INSTR;
  });
}
