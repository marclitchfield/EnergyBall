var roundRobot = require('../');;

var sphero = new roundRobot.Sphero();

var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

console.log(sphero);

sphero.connect();
sphero.on("connected", function(ball){
  console.log("Connected!");
  console.log("  c - change color");
  console.log("  b/n - backled on/off");
  console.log("  up - move forward");
  console.log("  back - stop");
  console.log("  left - change heading 45 deg left");
  console.log("  right - change heading 45 deg right");

  var rgb = color();
  sphero.setRGBLED(rgb[0], rgb[1], rgb[2], false);

  // listen for the "keypress" event
  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause(); process.exit();
    }
   if(key && key.name == 'c'){
      var rgb = color();
      sphero.setRGBLED(rgb[0], rgb[1], rgb[2], false);
    }
    if(key && key.name == 'b') sphero.setBackLED(1);
    if(key && key.name == 'n') sphero.setBackLED(0);
    if(key && key.name == 'right') sphero.setHeading(45);
    if(key && key.name == 'left') sphero.setHeading(315);
    if(key && key.name == 'up') sphero.roll(0, 0.5);
    if(key && key.name == 'down') sphero.roll(0, 0);
    if(key && key.name == 'x') sphero.setHeading(45).setHeading(315).setBackLED(1);
    
  });
  process.stdin.setRawMode(true);
  process.stdin.resume();

});

var color = function(){
  var r = Math.random()*255;
  var g = Math.random()*255;
  var b = Math.random()*255;
  return [r,g,b];
}

