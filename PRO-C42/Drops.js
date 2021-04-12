class Drops{
    constructor(x,y){
        var options = {
            density:1,
            frictionAir:1
        }
        this.rain = Bodies.circle(x,y,5,options);
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
        }
    }
    display(){
        var pos = this.body.position
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,2.5)
        pop();
    }
}