(function() {
  if(typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    obj = {};
    obj.pos = options.pos;
    obj.radius = Asteroid.RADIUS;
    obj.vel = options.vel || Asteroids.Util.randomVector(Asteroid.SPEED);
    obj.game = options.game;

    Asteroids.MovingObject.call(this, obj);
    // Asteroids.MovingObject is passed in an options hash
  };

  Asteroid.RADIUS = 15;
  Asteroid.SPEED = 2;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


  Asteroid.prototype.draw = function(ctx) {
    var img = new Image();
    img.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/bacteriophage_green";
    ctx.drawImage(img, this.pos[0] - 20, this.pos[1] - 20, 40, 40);
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.arc(
    //   this.pos[0],
    //   this.pos[1],
    //   this.radius,
    //   0,
    //   2 * Math.PI,
    //   false
    // );
    //
    //   ctx.fill();
  };

  Asteroid.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof Asteroids.Ship) {
      var that = this;
      // this.game.bullets.forEach(function(bullet) {
      //   that.game.remove(bullet);
      // });
      otherObj.relocate();
    }
  };
})();
