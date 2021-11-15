let flowers

function setup() {
  createCanvas(windowWidth, windowHeight)
  flowers = []
  hue = random(0, 100)
}

function draw() {
  background("#111118")
  flowers.forEach(f => {
    f.draw()
  })
}

function mouseDragged() {
  hue = hue + 0.5
  if (hue > 100) hue = 0
  flowers.push(new Flower(mouseX, mouseY))
}