function drawEndScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`ENDING: ${game.ending}`, width / 2, 160);

  fill(220);
  textSize(16);
  textAlign(CENTER, TOP);

  let msg = "";
  if (game.ending === "Overtrained Ending")
    msg = "You pushed too hard without recovery.";
  else if (game.ending === "S-Rank Awakening Ending")
    msg = "Balanced training + recovery. AWAKENED.";
  else if (game.ending === "Glass Cannon Ending")
    msg = "Strong… but fragile. Next time rest more.";
  else if (game.ending === "Healthy Beginner Ending")
    msg = "Very healthy, but not enough training yet.";
  else msg = "Steady progress. Keep going.";

  text(msg, width / 2, 220, 760, 200);

  addButton("Play Again", width / 2 - 120, 400, 240, 55, () => resetGame());
}
