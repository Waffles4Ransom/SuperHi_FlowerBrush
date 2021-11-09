function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  // circle(100, 100, 50)
  // background("#111118")
}

function mouseClicked() {
  noStroke()
  fill("orchid")
  square(mouseX - 25, mouseY - 25, 50)
}