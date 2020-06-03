class BaseClass{
  //creating construstor
    constructor(x, y, width, height, angle) {
      //creating options
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //creating options for this.body
        this.body = Bodies.rectangle(x, y, width, height, options);
        //storing width and height in this.width and this.height
        this.width = width;
        this.height = height;
        //loading the image
        this.image = loadImage("sprites/base.png");
        //adding this.body to the world
        World.add(world, this.body);
      }
      display(){
        //vreating angle
        var angle = this.body.angle;
        //creating push
        push();
        //translating position of x and y
        translate(this.body.position.x, this.body.position.y);
        //rotating
        rotate(angle);
        //making image at center
        imageMode(CENTER);
        //creating image
        image(this.image, 0, 0, this.width, this.height);
        //creating pop
        pop();
      }
}