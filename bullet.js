class Bullet {
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.speed = 0.05;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("bullets.png");
      this.animation = [this.image];
      this.trajectory = [];
      this.isSink = false;
      World.add(world, this.body);
    }
  
    animate() {
      this.speed += 0.05;
    }
  
    remove(index) {
      this.isSink = true;
      Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
  
      this.animation = waterSplashAnimation;
      this.speed = 0.05;
      this.r = 150;
      setTimeout(() => {
        Matter.World.remove(world, this.body);
        delete bullets[index];
      }, 1000);
    }

    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.animation[index], 0, 0, this.r, this.r);
      pop();
  
      if (this.body.velocity.x > 0 && pos.x > 10 && !this.isSink) {
        var position = [pos.x, pos.y];
        this.trajectory.push(position);
      }
  
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
      }
    }
  }
  
  