(function() {
  if(typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(ctx, level) {
    this.game = new Asteroids.Game(level);
    this.ctx = ctx;
    var background = new Image();
    background.src = "https://s3-us-west-1.amazonaws.com/yilingbucket/rbc.png";
    this.backgroundImg = background;
  };

  GameView.prototype.start = function() {
    var that = this;
    this.bindKeyHandlers();

    var refresh = setInterval(function() {
      that.game.moveObjects();
      that.game.checkCollisions();
      if (that.game.checkWin()) {
        $("body").append("<div class='modal'></div>");
        $("body").append("<div class='over'><h3>Congratulations! Your immune system has cleared all viruses!</h3><button class='start'>Close</button></div>");
        clearInterval(refresh);
        $("div.over").animate({left: '50%'}, "slow");
        $("button").on("click", function() {
          location.reload();
        });
      }
      if (that.game.checkOver()) {
        $("body").append("<div class='modal'></div>");
        $("body").append("<div class='over'><h3>It looks like the viruses have overtaken your immune system. Better luck next time!</h3><button class='start'>Close</button></div>");
        clearInterval(refresh);
        $("div.over").animate({left: '50%'}, "slow");
        $("button").on("click", function() {
          location.reload();
        });
      }
      that.ctx.drawImage(that.backgroundImg, 0, 0, 700, 500);
      that.game.draw(that.ctx);
      that.game.renderShipCount();
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.game.ship;
    key('up', function() {
      ship.power([0, -1]);
    });
    key('down', function() {
      ship.power([0, 1]);
    });
    key('left', function() {
      ship.power([-1, 0]);
    });
    key('right', function() {
      ship.power([1, 0]);
    });
    key('space', function() {
      ship.fireBullet();
    });
  };
})();
