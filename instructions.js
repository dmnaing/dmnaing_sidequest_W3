function drawInstructionsScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  text("HOW TO PLAY", width / 2, 140);

  fill(220);
  textSize(16);
  textAlign(CENTER, TOP);
  text(
    "- Each day choose ONE action.\n" +
      "- Pushups/Run: gain Level but lose Health.\n" +
      "- Rest: gain Health.\n" +
      "- After Day 3 you enter the Gate.\n" +
      "- Your Health + Level decide the ending.",
    width / 2,
    190,
    760,
    260,
  );

  addButton("Back", width / 2 - 90, 420, 180, 50, () => {
    game.state = STATE.START;
  });
}
