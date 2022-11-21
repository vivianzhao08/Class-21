const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var ball_options = {
  restitution: 0.95
}
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
  btn = createImg('right.png');
  btn.position(220,30);
  btn.size(50,50);
  btn.mouseClicked(hForce);

  btn1 = createImg('up.png');
  btn1.position(150,20);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}