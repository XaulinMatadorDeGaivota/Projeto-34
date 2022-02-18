const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var cesta;

var apple,apple2,apple3;

var bg_img;

var button;

var rope1,rope2,rop3;

function preload(){
  bg_img = loadImage("background.jpg");

  apple = loadImage("apple.png");
  apple2 = loadImage("apple.png")
  apple3 = loadImage("apple.png")

  cesta = loadImage("cesta.png");
}

function setup() {
  createCanvas(700,700);

  apple = createImg('apple.png');
  apple.position(100,100);
  apple.size(100,100);

  apple2 = createImg('apple.png');
  apple2.position(250,50);
  apple2.size(100,100);

  apple3 = createImg('apple.png');
  apple3.position(400,50);
  apple3.size(100,100);

  cesta = createImg('cesta.png');
  cesta.position(300,505);
  cesta.size(100,100);

  button = createImg('cut_btn.png');
  button.position(100,30);
  button.size(70,70);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:100,y:30});

  Matter.Composite.add(rope.body);


  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);
  image(bg_img,0,0,width,height);

  rope.show();

  Engine.update(engine);
  
  drawSprites();
}

function drop(){
  rope.break();

}
