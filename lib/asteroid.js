(function() {
  if(typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    this.level = options.level;
    obj = {};
    obj.pos = options.pos;
    obj.radius = Asteroid.RADIUS;
    obj.vel = options.vel || Asteroids.Util.randomVector(this.speed());
    obj.game = options.game;
    Asteroids.MovingObject.call(this, obj);
  };

  Asteroid.RADIUS = 20;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.speed = function() {
    if (this.level === 'beginner') {
      return 1;
    }
    if (this.level === 'intermediate') {
      return 3;
    }
    if (this.level === 'expert') {
      return 4;
    }
  };

  Asteroid.prototype.draw = function(ctx) {
    var img = new Image();
    img.src = "./assets/flu_virus.gif";
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
