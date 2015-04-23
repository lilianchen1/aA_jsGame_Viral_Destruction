(function() {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    this.vel = [0, 0];
    var obj = {};
    obj.game = options.game;
    obj.pos = options.pos;
    obj.vel = this.vel;
    obj.radius = Ship.RADIUS;
    Asteroids.MovingObject.call(this, obj);
  };

  Ship.RADIUS = 25;

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    var ship = new Image();
    ship.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/white_cell_transp.gif";
    ctx.drawImage(ship, this.pos[0] - 25, this.pos[1] - 25, 50, 50);
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.fireBullet = function() {
    this.game.bullets.push(new Asteroids.Bullet({
      direction: this.vel,
      pos: this.pos,
      game: this.game //MovingObject has a this.game in constructor
    }));
  };
})();
