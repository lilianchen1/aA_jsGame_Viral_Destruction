(function() {
  if(typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var RBC = Asteroids.RBC = function(options) {
    var obj = {};
    obj.pos = options.pos;
    obj.vel = Asteroids.Util.randomVector(RBC.SPEED);
    obj.radius = RBC.RADIUS;
    obj.game = options.game;

    Asteroids.MovingObject.call(this, obj);
  };

  Asteroids.Util.inherits(RBC, Asteroids.MovingObject);

  RBC.RADIUS = 40;
  RBC.SPEED = 1;

  RBC.prototype.draw = function(ctx) {
    var rbc = new Image();
    rbc.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/single_rbc";
    ctx.drawImage(rbc, this.pos[0] - 40, this.pos[1] - 40, 80, 80);
  };

  RBC.prototype.draw2 = function(ctx) {
    var rbc = new Image();
    rbc.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/single_rbc_2.png";
    ctx.drawImage(rbc, this.pos[0] - 40, this.pos[1] - 40, 80, 80);
  };
})();
