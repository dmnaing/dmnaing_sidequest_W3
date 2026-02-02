class UIButton {
  constructor(label, x, y, w, h, onClick) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.onClick = onClick;
  }

  draw() {
    const hover = this.isHovering();
    stroke(255);
    strokeWeight(2);
    fill(hover ? 50 : 25, 35, 70);
    rect(this.x, this.y, this.w, this.h, 10);

    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.label, this.x + this.w / 2, this.y + this.h / 2);
  }

  isHovering() {
    return (
      mouseX >= this.x &&
      mouseX <= this.x + this.w &&
      mouseY >= this.y &&
      mouseY <= this.y + this.h
    );
  }

  click() {
    if (this.isHovering() && this.onClick) this.onClick();
  }
}
