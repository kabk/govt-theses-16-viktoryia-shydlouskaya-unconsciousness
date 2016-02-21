// using Snap so sheep/#Fluff can be selected and animated
var sheep = Snap.select('#Fluff');

// changes sheep color using .animate and randomized color values
function color_change(){
// sets random string value for use as color
  var random_value = Math.floor(Math.random()*16777215).toString(16);
  // converts random color string into hex
  var random_color = '#' + random_value;
  sheep.attr({
    fill: "#fff"
  }).animate({fill: random_color}, 500)
};

// set interval for flashing
setInterval(color_change, 400)