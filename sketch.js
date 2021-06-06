const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground;
var bird;

function setup() {
	var canvas = createCanvas(1000, 500);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,485,1000,15);
  bird = new Bird(200,250);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0,0,255);

  Engine.update(engine);

  drawSprites();

  birdFly();

  ground.display();
  bird.display();
}

function birdFly() {
  if(keyCode === 32) {
    Matter.Body.setStatic(bird.body, true);
    //Matter.Body.applyForce(bird.body, bird.body.position, {x:50, y:50});
  }
}



