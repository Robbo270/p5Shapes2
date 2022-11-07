function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(0);

    fill(255, 0, 0);
    ellipse(100, 100, 200);

    fill(255, 107, 0);
    ellipse(300, 100, 200);

    fill(255, 214, 0);
    ellipse(500, 100, 200);

    fill(158, 255, 0);
    ellipse(700, 100, 200);

    fill(0, 255, 102);
    ellipse(100, 300, 200);

    fill(0, 255, 209);
    ellipse(300, 300, 200);
    
    fill(0, 163, 255);
    ellipse(500, 300, 200);

    fill(0, 56, 255);
    ellipse(700, 300, 200);

    fill(158, 0, 255);
    ellipse(100, 500, 200);
    
    fill(219, 0, 255);
    ellipse(300, 500, 200);

    fill(255, 0, 77);
    ellipse(500, 500, 200);

    fill(255, 0, 0);
    ellipse(700, 500, 200);

    fill(255, 138, 0);
    ellipse(100, 700, 200);

    fill(255, 214, 0);
    ellipse(300, 700, 200);

    fill(219, 0, 255);
    ellipse(500, 700, 200);

    fill(0, 255, 209);
    ellipse(700, 700, 200);
}