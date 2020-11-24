const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var base1, base2, base3;
var poly, sling;


function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    base1 = new Base(440, 400, 280, 20);
    base2 = new Base(900, 300, 200, 20);

    base3 = new Base(600, 600, 1200, 20);

    // Row 1
    block1 = new Block(320, 360, 40, 50, "blue");
    block2 = new Block(360, 360, 40, 50, "red");
    block3 = new Block(400, 360, 40, 50, "green");
    block4 = new Block(440, 360, 40, 50, "greenyellow");
    block5 = new Block(480, 360, 40, 50, "yellow");
    block6 = new Block(520, 360, 40, 50, "black");
    block7 = new Block(560, 360, 40, 50, "white");

    // Row 2
    block8 = new Block(520, 320, 40, 50, "purple");
    block9 = new Block(360, 320, 40, 50, "yellow");
    block10 = new Block(400, 320, 40, 50, "lightgreen");
    block11 = new Block(440, 320, 40, 50, "pink");
    block12 = new Block(480, 320, 40, 50, "cyan");

    // Row 3
    block13 = new Block(480, 280, 40, 50, "yellow");
    block14 = new Block(440, 280, 40, 50, "darkcyan");
    block15 = new Block(400, 280, 40, 50, "greenyellow");

    // Row 4
    block16 = new Block(440, 240, 40, 50, "violet");


    // 2nd base
    block17 = new Block(860, 260, 40, 50, "violet");
    block18 = new Block(900, 260, 40, 50, "cyan");
    block19 = new Block(940, 260, 40, 50, "yellow");
    block20 = new Block(820, 260, 40, 50, "green");
    block21 = new Block(980, 260, 40, 50, "blue");
    block22 = new Block(860, 200, 40, 50, "greenyellow");
    block23 = new Block(900, 200, 40, 50, "red");
    block24 = new Block(940, 200, 40, 50, "white");
    block25 = new Block(900, 140, 40, 50, "DodgerBlue");

    poly = new Poly(100, 300, 50);
    sling = new Sling(poly.body, {
        x: 100,
        y: 300
    })

}

function draw() {
    background("#382C2C");
    Engine.update(engine);

    base1.display();
    base2.display();
    base3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    poly.display();
    sling.display();
}
function mouseDragged() {
    Matter.Body.setPosition(poly.body, {
        x: mouseX,
        y: mouseY
    })
}
function mouseReleased() {
    sling.fly();
}
function keyPressed() {
    if (keyCode === 32) {

        sling.attach(poly.body);
    }
}

