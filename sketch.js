let cnv;
let particles = [];
let springs = [];
let spacing = 20;
let k = 0.1;
let gravity;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');

  for (let i = 0; i < 20; i++) {
    particles[i] = new Particle(42, i * spacing);
    if (i != 0) {
      let a = particles[i];
      let b = particles[i-1];
      let spring = new Spring(k, spacing, a, b);
      springs.push(spring);
    }
  }

  // lock the first particle so it has no physics
  particles[0].locked = true;

  gravity = createVector(0, 0.1)
}

function draw() {
  background(242);

  for (let s of springs) {
    s.update();
    s.show();
  }

  // for closed shape
  noFill();
  stroke(242, 65, 242);


  beginShape();

  // need head and tail
  let head = particles[0];
  curveVertex(head.position.x, head.position.y);

  for (let p of particles) {
    p.applyForce(gravity);
    p.update();

    // create a closed shape with curved edges
    curveVertex(p.position.x, p.position.y);

  }
  let tail = particles[particles.length-1];
  curveVertex(tail.position.x, tail.position.y);

  endShape();

  // bottom particle
  if (mouseIsPressed && mouseY > 150) { // exclude top menus
    tail = particles[particles.length-1];
    tail.position.set(mouseX, mouseY);
    tail.velocity.set(0, 0);

  }

 }

class Particle {
  constructor(x, y) {
    this.locked = false;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.position = createVector(x, y);
    this.mass = 1; // Let's do something better here!
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  // Method to update position
  update () {
    if (!this.locked) {
      this.velocity.mult(0.99);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  }

  // Method to display
  show() {
    stroke(255);
    strokeWeight(2);
    fill(45, 197, 244);
    ellipse(this.position.x, this.position.y, 16);
  }
}

class Spring {

  constructor(k, restLength, a, b ) {
    this.k = k;
    this.restLength = restLength;
    this.a = a;
    this.b = b;
  }

  update() {
    // F = -k * distplacement * unit-vector
    // unit-vector = (b-a).normalize()
    // displacement = unit-vector.mag() - restLength
    let force = p5.Vector.sub(this.b.position, this.a.position);
    let displacement = force.mag() - this.restLength;
    force.normalize(); // get the unit vector (direction)
    force.mult(this.k * displacement);

    // when you apply the force, the force on both particles points inwards towards their resting positions, so you need to change the code a bit
    this.a.applyForce(force);
    force.mult(-1);
    this.b.applyForce(force);
  }

  show() {
    stroke(4, 196, 217); // blue
    // line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

    fill(242, 65, 242);
    ellipse(this.a.position.x, this.a.position.y, 4)
    noFill();
    ellipse(this.a.position.x, this.a.position.y, 24);

  }
}
