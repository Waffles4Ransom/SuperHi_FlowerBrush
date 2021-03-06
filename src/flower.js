class Flower {
  constructor(x, y, hue, size) {
    this.x = x
    this.y = y
    this.hue = hue
    this.midSize = size
    this.petalDist = size/2 + random(0, 10)
    this.numOfPetals = random(7,20)
    this.rotation = 0
    this.rotationSpeed = random(-0.003, 0.003)
  }

  draw() {
    colorMode(HSB, 100)
    noStroke()
    fill(this.hue, 100, 100, this.alpha)
    circle(this.x, this.y, this.midSize)

    for (let num = 0; num < this.numOfPetals; num += 1) {
      let angle = TWO_PI * num / this.numOfPetals + this.rotation
      let branch = createVector(this.petalDist, 0)
      branch.rotate(angle)
      circle(this.x + branch.x, this.y + branch.y, 10)
    }
    this.rotation += this.rotationSpeed
  }
}