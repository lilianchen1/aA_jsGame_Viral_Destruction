(function() {
  if(typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(level) {
    this.level = level;
    this.rbc = [];
    this.addRBC();
    this.asteroids = [];
    this.addAsteroids();
    this.bullets = [];
    this.ship = new Asteroids.Ship({game: this, pos: this.randomPosition()});
    this.shipCount = 0;
  };

  Game.DIM_X = 700;
  Game.DIM_Y = 500;
  Game.NUM_RBC = 12;

  Game.prototype.numAsteroids = function() {
    if (this.level === 'beginner') {
      return 10;
    }
    if (this.level === 'intermediate') {
      return 15;
    }
    if (this.level === 'expert') {
      return 22;
    }
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < this.numAsteroids(); i++) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this,
        level: this.level,
      }));
    }
  };

  Game.prototype.addRBC = function() {
    for (var i = 0; i < Game.NUM_RBC; i++) {
      this.rbc.push(new Asteroids.RBC({
        pos: this.randomPosition(),
        game: this
      }));
    }
  };

  Game.prototype.draw = function(ctx) {
    for (var i = 0; i < Math.floor(this.rbc.length/2); i++) {
      this.rbc[i].draw(ctx);
    }
    for (var j = Math.floor(this.rbc.length/2); j < this.rbc.length; j++) {
      this.rbc[j].draw2(ctx);
    }
    this.asteroids.forEach(function(ast) {
      ast.draw(ctx);
    });
    this.ship.draw(ctx);
    this.bullets.forEach(function(bullet) {
      bullet.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(ast) {
      ast.move();
    });
    this.ship.move();
    this.bullets.forEach(function(bullet) {
      bullet.move();
    });
    this.rbc.forEach(function(r) {
      r.move();
    });
  };

  Game.prototype.randomPosition = function() {
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;
    while (x > Game.DIM_X - 25 || x < 25) {
      x = Math.random() * Game.DIM_X;
    }
    while (y > Game.DIM_Y - 25 || y < 25) {
      y = Math.random() * Game.DIM_Y;
    }
    return [x, y];
  };

  Game.prototype.wrap = function(pos) {
    return [
      wrap(pos[0], Game.DIM_X), wrap(pos[1], Game.DIM_Y)
    ];
    function wrap (coord, max) {
      if (coord < 0) {
        return max - (coord % max);
      } else if (coord > max) {
        return coord % max;
      } else {
        return coord;
      }
    }
  };

  Game.prototype.checkCollisions = function() {
    var that = this;
    this.allObjects().forEach(function(obj1) {
      that.allObjects().forEach(function(obj2) {
        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      });
    });
  };

  Game.prototype.checkWin = function() {
    if (this.asteroids.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.allObjects = function() {
    return [].concat(this.asteroids).concat([this.ship]).concat(this.bullets);
  };

  Game.prototype.remove = function(object) {
    if (object instanceof Asteroids.Asteroid) {
      return remove(this.asteroids, object);
    }

    else if (object instanceof Asteroids.Bullet) {
      return remove(this.bullets, object);
    }

    function remove (array, obj) {
      var index = array.indexOf(obj);
      array.splice(index, 1);
    }
  };

  Game.prototype.isOutOfBound = function(pos) {
    return (pos[0] < 0) || (pos[0] > Game.DIM_X) || (pos[1] < 0) || (pos[1] > Game.DIM_Y);
  };

  Game.prototype.renderShipCount = function() {
    $("div.shipcount").removeClass("hidden");
    $("div.shipcount").html("<p><span>"+ this.shipCount +"</span><br> B cells have been infected so far.<br>You have <strong>" + (10 - this.shipCount) + "</strong> B cells left.</p><p class='viral_count'>You have killed <strong>"+ (this.numAsteroids() - this.asteroids.length) +" </strong> out of "+ this.numAsteroids()+" viruses</p>");
  };

  Game.prototype.checkOver = function() {
    return 9 < this.shipCount;
  };

})();
