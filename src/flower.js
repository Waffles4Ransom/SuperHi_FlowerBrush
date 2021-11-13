class Flower {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.hue = random(100)
    this.midSize = random(20, 40)
  }

  draw() {
    colorMode(HSB, 100)
    noStroke()
    fill(this.hue, 100, 100)
    circle(this.x, this.y, this.midSize)
  }
}