const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;;
var log1,log2,log3,log4;
var bird;
var backgroundimg;
var constrainedLog;
var   slingShot
var  bg ="sprites/bg.png"
var gameState="Onsling"
var score=0
function preload() {
 GetbackGroundimg()
}

function setup(){
    
    var arr1;
    arr1=[1,2,3,4,5];
    console.log(arr1[4]);
    var arr2;
    arr2=[[10,20],[40,50],[60,70]];
    console.log(arr2[0][1]);
    arr2.push(80);
    console.log(arr2);
    arr2.pop();
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log (810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log3 = new Log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150,PI/7);
    log2 = new Log(870,120,150,-PI/7);

    bird = new Bird(200,50);
    
    //constrainedLog = new Log(200,150,100,PI/2);


   
   slingShot = new SlingShot(bird.body,{x:200,y:50});
   


}

function draw(){
    if(backgroundimg)
    background(backgroundimg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();
    box5.display();
    log4.display();
    log2.display();
    bird.display();
    slingShot.display();
    
}

  function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x:mouseX,y:mouseY})

  }

  function mouseReleased(){
  
slingShot.fly();

  }
function keyPressed(){
    if(keyCode ===32){
        Matter.Body.setPosition(bird.body, {x:200,y:50});
        slingShot.attach(bird.body);

    }
}

async function GetbackGroundimg(){

 var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
 var JSON =await response.json()
 var datetime =JSON.datetime
 var hour = datetime.slice(11,13)
 if(hour>=6 & hour<=19){
  bg="sprites/bg.png"

 }
else{
 bg="sprites/bg2.jpg"

}
backgroundimg=loadImage(bg)

}