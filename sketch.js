//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {

    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,30, ground_options);
  World.add(world,ground);

    
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 30);
}