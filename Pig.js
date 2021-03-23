class Pig  extends  Baseclass{
    constructor(x, y) {
     super(x,y,50,50);
     this.image=loadImage("sprites/enemy.png");
     this.visiblty=255;


    }
display(){
    //console.log(this.body.speed);
    if(this.body.speed<3){

        super.display();
    
    }
    else{
        World.remove(world, this.body);
        this.visiblty=this.visiblty=-5
        push();
        tint(255,this.visiblty)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();


    }
}
  
score(){
    if(this.visiblty<0 && this.visiblty>-1010)
    score++
}
 };