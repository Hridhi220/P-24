class Hammer {
constructor (x,y){
  var options={
      'restitutions':2,
       'friction':1.0,
      'density':0.5
    }
    this.body=Bodies.rectangle(x,y,30,70,options);
    this.height=30;
    this.width=70;

    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    pos.x = mouseX;
    pos.y = mouseY;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("white");
    strokeWeight(3);
    fill("orange");
    rect(0,0,this.width, this.height);
    pop();
   }
   }
