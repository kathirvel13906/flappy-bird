const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var start = 0;
var PLAY = 1;
var END = 2;
var gameState = 0;

var engine, world;

var canvas;
var ground;
var form;
var bg, bgSprite;
var bird;
var a = 1100;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

function preload() {
  bg = loadImage("bg.png");
  birdEnd = loadImage("birdEnd.jpg");
}

function setup() {
	var canvas = createCanvas(1000, 500);

	engine = Engine.create();
  world = engine.world;

  /*bgSprite = createSprite(1000, 50, 1000, 500);
  bgSprite.addImage(bg);
  bgSprite.velocityX = -8;
  bgSprite.scale = 7;*/
  
  ground = new Ground(500,485,50000,15);
  form = new Form();
  bird = new Bird(200,200);

  wall1 = new Wall(a+200);
  wall2 = new Wall(a+400);
  wall3 = new Wall(a+600);
  wall4 = new Wall(a+800);
  wall5 = new Wall(a+1000);
  wall6 = new Wall(a+1200);
  wall7 = new Wall(a+1400);
  wall8 = new Wall(a+1600);
  wall9 = new Wall(a+1800);
  

	Engine.run(engine);
}

function draw() {
  //background(0,0,255);
  background(bg);

  //console.log(gameState);

  Engine.update(engine);

  /*if(bgSprite.x<0) {
    bgSprite.x = 1000;
  }*/

  drawSprites();

  ground.display();
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
  
  

  if(gameState === 0) {
    form.display();
  } else 
  if(gameState === 1) {
    birdFly();

    form.hide();

    camera.position.x = bird.body.position.x;
  } else
  if(gameState === 2) {

  }
}

function birdFly() {
  if(keyDown("space")) {
    Matter.Body.applyForce(bird.body, bird.body.position, {x:39,y:-65});
  }
}



