const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,logs,box3,box4,pig2,log2,box5,log3,log4,b;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new pig(800,350);
    logs = new log(800,250,280,PI/2);
    box3 = new Box(700,220,70,70);
    box4 = new Box(900,220,70,70);
    pig2 = new pig(800,220);
    log2 = new log(800,180,280,PI/2);
    box5 = new Box(800,150,70,70);
    log3 = new log(750,120,150,PI/7);
    log4 = new log(850,120,150,-PI/7);
    b = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    logs.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    b.display();
}