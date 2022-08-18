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
