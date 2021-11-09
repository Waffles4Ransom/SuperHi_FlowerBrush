function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  // circle(100, 100, 50)
  // background("#111118")
}

function mouseClicked() {
  new Flower(mouseX, mouseY)
}