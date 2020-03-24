const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1450,750);
   engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,700,70,70);
   

}

function draw() {
  background("black");
    Engine.update(engine);
    box1.display();
   
}