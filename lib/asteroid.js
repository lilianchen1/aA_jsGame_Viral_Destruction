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
  };

  Asteroid.RADIUS = 15;
  Asteroid.SPEED = 2;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


  Asteroid.prototype.draw = function(ctx) {
    var img = new Image();
    img.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/bacteriophage_green";
    ctx.drawImage(img, this.pos[0] - 20, this.pos[1] - 20, 40, 40);
  };

  Asteroid.prototype.collideWith = function(otherObj) {
    if (otherObj instanceof Asteroids.Ship) {
      var that = this;
      otherObj.relocate();
      this.game.shipCount += 1;
    }
  };
})();
