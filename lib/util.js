(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function() {

  };

  Util.inherits = function(child, parent) {
    function Surrogate() {
      this.constructor = child;
    }
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  };

  Util.randomVector = function(speed) {
    // in radians, 360 degrees is 2 * pi
    var angle = 2 * Math.PI * Math.random();
    var x = speed * Math.sin(angle);
    var y = speed * Math.cos(angle);
    return [x, y];
  };

  Util.distance = function(pos1, pos2) {
    return Math.sqrt(Math.pow(pos2[0]-pos1[0], 2) + Math.pow(pos2[1]-pos1[1], 2));
  };

  Util.direction = function(vector) {
    var length = Util.distance([0,0], vector);
    return [vector[0]/length, vector[1]/length];
  };
})();
