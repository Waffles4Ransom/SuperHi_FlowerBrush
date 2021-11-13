let flowers

function setup() {
  createCanvas(windowWidth, windowHeight)
  flowers = []
}

function draw() {
  background("#111118")
  flowers.forEach(f => {
    f.draw()
  })
}

function mouseDragged() {
  flowers.push(new Flower(mouseX, mouseY))
}