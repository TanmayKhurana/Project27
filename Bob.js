class Bob {

  constructor(x, y, r) {
      var options={
          isStatic:false,
          restitution:1, 
          friction:1,
          density:6
      }
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0, 0, 0);
      pop();
    }
}