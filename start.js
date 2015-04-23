$.fn.startGame = function(ctx) {
  return this.each(function () {
    new $.Game(this, ctx);
  });
};

$.Game = function (el, ctx) {
  this.$el = $(el);
  var $button = this.$el.find("button");
  this.$canvas = $(this.$el.data("canvas"));
  var that = this;
  $button.on("click", function(event) {
    that.$el.addClass("hidden");
    that.$canvas.removeClass("hidden");
    new Asteroids.GameView(ctx).start();
  });
 };
