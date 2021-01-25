const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,object);

   


    console.log(object);

    var ballOption = {
        restitution: 3
        
    }
    ball = Bodies.rectangle(100,200,40,40,ballOption);
    World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

    rect(ball.position.x,ball.position.y,40,40);
}
