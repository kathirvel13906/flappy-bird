const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var start = 0;
var PLAY = 1;
var END = 2;
var gameState = 0;

var engine, world, canvas;

var ground, topedge;
var form;
var time, score;
var bg;
var bird;
var wall1 , wall2 , wall3 , wall4 , wall5 , wall6 , wall7 , wall8 , wall9 , wall10;
var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

function preload() {
  bg = loadImage("bg.png");
  birdEnd = loadImage("birdEnd.jpg");
}

function setup() {
	var canvas = createCanvas(1000, 500);

	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(500,485,500000,15);
  topedge = new Ground(500,1,500000,2);

  form = new Form();
  bird = new Bird(500,200);

  wall1 = new Wall(1);
  wall2 = new Wall(2);
  wall3 = new Wall(3);
  wall4 = new Wall(4);
  wall5 = new Wall(5);
  wall6 = new Wall(6);
  wall7 = new Wall(7);
  wall8 = new Wall(8);
  wall9 = new Wall(9);
  wall10 = new Wall(10);
  wall11 = new Wall(11);
  wall12 = new Wall(12);
  wall13 = new Wall(13);
  wall14 = new Wall(14);
  wall15 = new Wall(15);
  wall16 = new Wall(16);
  wall17 = new Wall(17);
  wall18 = new Wall(18);
  wall19 = new Wall(19);
  wall20 = new Wall(20);
  
  Engine.run(engine);
  
  time = 0;
  score = 0;
}

function draw() {
  //background(0,0,255);
  background(bg);

  console.log(gameState);

  Engine.update(engine);

  ground.display();
  topedge.display();
  bird.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();

  camera.position.x = bird.body.position.x;
  
  form.reset();

  drawSprites();

  if(gameState === 0) {
    form.display();
  } else 
  if(gameState === 1) {
    birdFly();

    fill("black");
    textSize(24);
    stroke("yellow");
    text("Survival Time: "+time, bird.body.position.x-490, 35);
    text("Score: "+score, bird.body.position.x-490, 60);

    //form.hide();
  } else
  if(gameState === 2) {

  }

  collide();
}

function birdFly() {
  if(keyDown("space") && gameState === 1) {
    Matter.Body.setStatic(bird.body, false);
    Matter.Body.applyForce(bird.body, bird.body.position, {x:39,y:-65});
  }
}

function collide() {
  if(wall1.x - bird.x < 75) {
    console.log("game ended");
  }
}

