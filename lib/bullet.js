(function() {
  if(typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    obj = {};
    obj.game = options.game;
    obj.pos = [options.pos[0], options.pos[1]];
    this.dir = Asteroids.Util.direction(options.direction);
    obj.vel = [this.dir[0] * Bullet.SPEED, this.dir[1] * Bullet.SPEED];
    obj.radius = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, obj);
  };

  Bullet.SPEED = 7;
  Bullet.RADIUS = 10;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    var game = this.game;
    if (otherObject instanceof Asteroids.Asteroid ) {
      game.remove(otherObject);
    }
  };

  Bullet.prototype.draw = function(context) {
    var bullet = new Image();
    bullet.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/antibody.gif";
    context.drawImage(bullet, this.pos[0] - 10, this.pos[1] - 10, 20, 20);
  };

})();
