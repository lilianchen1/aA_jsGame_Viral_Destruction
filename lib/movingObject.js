(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MO = Asteroids.MovingObject = function(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color || "black";
    this.game = obj.game;
  };

  MO.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.game.isOutOfBound(this.pos)) {
      if (this instanceof Asteroids.Bullet) {
        this.game.remove(this);
      }
      else {
        this.pos = this.game.wrap(this.pos);
      }
    }
  };

  MO.prototype.isCollidedWith = function(otherObj) {
    var combinedRadius = this.radius + otherObj.radius;
    if (this === otherObj) {
      // check if self is colliding with self (self is always colliding with self)
      return false;
    }
    return Asteroids.Util.distance(this.pos, otherObj.pos) < combinedRadius;
  };

  MO.prototype.collideWith = function(otherObj) {

  };

})();
