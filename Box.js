class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,//bounceness 
        'friction':1.0,//physc eng
        'density':1.0//physc eng
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();//creating new setting box1
    translate(pos.x, pos.y);//current position
    rotate(angle);//to move at an particular angle 
    rectMode(CENTER);
    strokeWeight(4);//border to the particular box
    stroke("green");//giving colour to the stroke
    fill(255);//colour of the rect
    rect(0, 0, this.width, this.height);//we have 
    //captured x and y using translate
    pop();//reset back old settings
  }
};
