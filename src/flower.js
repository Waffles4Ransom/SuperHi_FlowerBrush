class Flower {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    noStroke()
    fill("orchid")
    square(this.x - 25, this.y - 25, 50)
    fill("yellow")
    circle(this.x, this.y, 10)
  }
}