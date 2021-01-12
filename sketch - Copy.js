const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
,block11,block12,block13,block14,block15,block16
,block17,block18block19,block20,block21,block22,block23,block24,block25

var polygon

function preload() {

    polygon = loadImage("polygon.png")
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    world = engine.world;

ground = new Ground(600,height,1200,20);
block1 = new Block(231,100,30,40)
block2 = new Block(321,234,30,40)
block3 = new Block(123,321,30,40)
block4 = new Block(123,100,30,40)
block5 = new Block(242,213,30,40)
block6 = new Block(321,200,30,40) 
block7 = new Block(123,242,30,40)
block8 = new Block(330,235,30,40)
block9 = new Block(360,235,30,40)
block10 = new Block(390,235,30,40)
block11= new Block(420,235,30,40)
block12= new Block(450,235,30,40)
block13= new Block(360,195,30,40)
block14= new Block(390,195,30,40)
block15= new Block(420,195,30,40)
block16= new Block(390,155,30,40)
block17= new Block(432,234,30,40)
block18= new Block(345,234,30,40)
block19= new Block(235,310,30,40)
block20= new Block(543,219,30,40)
block21= new Block(432,342,30,40)
block22= new Block(543,100,30,40)
block23= new Block(245,300,30,40)
block24= new Block(134,245,30,40)
block25= new Block(532,210,30,40)


    
}

function draw(){
    
    Engine.update(engine);
     

}


function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon)
    }
}