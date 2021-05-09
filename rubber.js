class Rubber {
    constructor (x,y,r){
      var options={
          'restitutions':0.3,
           'friction':5,
          'density':1
        }
        this.r=r
        this.body=Bodies.circle(x,y,(r-20)/2,options);

    
        World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
 

     push();
     translate(pos.x,pos.y);
     ellipseMode(CENTER);
     stroke("black");
     strokeWeight(3);
     fill("blue");
     ellipse(0,0, this.r, this.r);
     pop();
    }
    }