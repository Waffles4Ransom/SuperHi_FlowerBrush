class Flower {
  constructor(x, y, hue, size) {
    this.x = x
    this.y = y
    this.hue = hue
    this.midSize = size
    // this.alpha = 100
  }

  draw() {
    colorMode(HSB, 100)
    noStroke()
    fill(this.hue, 100, 100, this.alpha)
    circle(this.x, this.y, this.midSize)
    // this.alpha -= 1
    // this.midSize += 1
  }
}