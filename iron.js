class Iron {
    constructor (x,y){
      var options={
          'restitutions':0.8,
           'friction':3,
          'density':30
        }
        this.body=Bodies.rectangle(x,y,80,50,options);
        this.height=50;
        this.width=80;
    
        World.add(world,this.body);
    }
    display(){
     var angle=this.body.angle;
   var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("brown");
     rect(0,0, this.width, this.height);
     pop();
    }
    }