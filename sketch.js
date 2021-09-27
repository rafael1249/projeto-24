const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer
var plane,rubber1,junin, peter;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100); 
    rubber1 = new Rubber(600,100,100);
    junin = new Pedra(250,100,60,130);
    peter = new metal(900,100,80,160);
  
  

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    junin.display(); 
    peter.display();
    
 
}