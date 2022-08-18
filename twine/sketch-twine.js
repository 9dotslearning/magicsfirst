let y = 0;
let ystep = 6;
let colors;
let currentColor;

function windowResized() {
  resizeCanvas(32, windowHeight);
}

function setup() {
  cnv = createCanvas(32, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  colorMode(HSB);
  background(0, 0, 95);
  frameRate(10);

  colors = [color(242, 56, 71, 0.4), color(139, 65, 242, 0.4), color(4, 157, 217, 0.4
), color(4, 191, 123, 0.4), color(242, 203, 5, 0.4)];

}

function draw() {
  noStroke();
  if ( ystep > 0 ) fill(getColor());
  else fill(0, 0, 95);
  // fill(0, 100, 100, 0.1);
  ellipse(12 * sin(radians(4 * y)) + 16, y, 4, 4);
  ellipse(-12 * sin(radians(4 * y)) + 16, y, 4, 4);
  y += ystep;
  if ( y > windowHeight) {
    ystep = 0;
  }

}

function getColor() {
  let whichColor = floor(random(colors.length));
  return colors[whichColor];

}
