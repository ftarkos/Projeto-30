class Polygon{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png")
        World.add(world, this.body);

        slingShot = new SlingShot(this.body,{x:100,y:200})
        
        function mouseDragged() {
            Matter.Body.setPosition(poligono, {x:100, y:200})
          }
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}