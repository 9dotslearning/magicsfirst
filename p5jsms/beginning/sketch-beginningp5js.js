let x = 0;
let y = 0;

function windowResized() {
  resizeCanvas(32, windowHeight);
}

function setup() {
  cnv = createCanvas(32, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  colorMode(HSB);
  background(0, 0, 95);
}

function draw() {
    noStroke();
    fill(random(360), 100, 100, 0.3);
    ellipse(mouseX % width, mouseY, 6, 6);

    ellipse(width - mouseX % width, y, 6, 6);

    ellipse(mouseX, height - mouseY, 6, 6);

    ellipse(width - mouseX % width, height - mouseY, 6, 6);

}
