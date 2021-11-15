let flowers
let size

function setup() {
  createCanvas(windowWidth, windowHeight)
  flowers = []
  hue = random(0, 100)
  size = 20
}

function draw() {
  background("#111118")
  flowers.forEach(f => {
    f.draw()
  })
}

function mouseDragged() {
  hue = hue + 0.5
  size += 0.5
  size = constrain(size, 20, 100)
  if (hue > 100) hue = 0
  flowers.push(new Flower(mouseX, mouseY, hue, size))
}

function mouseReleased() {
  hue = random(0, 100)
  size = 20
}