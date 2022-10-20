// colors from Leigh Prather, https://stock.adobe.com/295758061/
let colors;
let counter = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  // background(242);
  background(255);
  /*
  colors = [color(238, 5, 242, 40),
             color(56, 5, 242, 40),
             color(104, 242, 5, 40),
             color(234, 242, 5, 40),
             color(242, 25, 5, 40),
             color(249, 249, 249, 40),
           ];
  */
  colors = [color(238, 5, 242, 70),
            color(56, 5, 242, 70),
            color(104, 242, 5, 70),
            color(234, 242, 5, 70),
            color(242, 25, 5, 70),
            color(249, 249, 249, 70),
          ];
}

function draw() {
  noStroke();
  let whichColor = floor(random(colors.length));
  counter += 1;
  if (counter < 240) {
    fill(colors[whichColor]);
    ellipse(random(32), random(height), random(32));
  }
}
