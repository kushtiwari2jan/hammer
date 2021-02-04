class Rubber {
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
    
          }
       this.box=Bodies.rectangle(x,y,70,70,options);
       this.width=70;
        this.height=70;  
        World.add(world,this.box);
        
    }
    
    display(){
       
        var angle=this.box.angle;
        push();
        translate(this.box.position.x,this.box.position.y);
        rotate(angle)
        rectMode(CENTER);
        
        fill("green");
        ellipse(56, 46, 55, 55);
        pop();
    }
    
    
    }




