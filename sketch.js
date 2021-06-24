const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, world;
var polygon_img
var gameState = "onSling";

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    G1 = new Ground(390,315,240,20);
    G2 = new Ground(800,230,180,20)

    b1 = new Box(300,275,30,40);
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);

    b8 = new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10 = new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);

    b13 = new Box(360,195,30,40);
    b14 = new Box(390,195,30,40);
    b15 = new Box(420,195,30,40);

    b16 = new Box(390,155,30,40);

    bb8 = new Box(740,215,30,40);
    bb9 = new Box(770,215,30,40);
    bb10 = new Box(800,215,30,40);
    bb11 = new Box(830,215,30,40);
    bb12 = new Box(860,215,30,40);

    bb13 = new Box(770,185,30,40);
    bb14 = new Box(800,185,30,40);
    bb15 = new Box(830,185,30,40);

    bb16 = new Box(800,145,30,40);

    polygon = new Polygon(50,50,50);
    slingshot = new Rope(polygon.body,{x:200, y:100});

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    G1.display();
    G2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    
    bb8.display();
    bb9.display();
    bb10.display();
    bb11.display();
    bb12.display();
    bb13.display();
    bb14.display();
    bb15.display();
    bb16.display();

    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    if(mouseX >= 0 && mouseX < 200 && gameState!== "OnSling"){
        Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && gameState === "launched"){
        Body.setPosition(polygon.body,{x:200,y:50});
        slingshot.attach(polygon.body);
        gameState="onSling";
    }
}