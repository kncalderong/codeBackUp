// Decleare a module with a group of functions immediately invoked

let motionModule = (function () {
  return {

    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },

    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }

  } // end return
})();

// Executed:

motionModule.glideMixin(duck);
duck.glide();
