class Polygon{
  constructor(x,y,r){
    var b_options = {
      restitution: 0.3,
      density: 1.2,
      friction:0.5,
      isStatic: false
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("polygon.png");
    this.body = Bodies.circle(this.x,this.y,this.r/2,b_options);
    World.add(world,this.body);
  }
  
  display(){
    var gos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(gos.x,gos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
  }
}