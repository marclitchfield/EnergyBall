var spheroModule = require('node-sphero');
var sphero = new spheroModule.Sphero();

sphero.on('connected', function() {
	sphero.setStabilization(false);
	sphero.setDataStreaming([
		sphero.sensors.accelerometer_x,
		sphero.sensors.accelerometer_y
	]);
});

var energy = 0;
var lastX, lastY;

setInterval(function() {
	sphero.setRGBLED(0, 0, energy, false);
	energy = Math.max(energy - 0.2, 0);
}, 1);

sphero.on('notification', function(message) {
	var x = message.DATA.readInt16BE(0);
	var y = message.DATA.readInt16BE(2);
	
	if (lastX && lastY) {
		var dx = Math.abs(x - lastX);
		var dy = Math.abs(y - lastY);
		var dist = Math.sqrt(dx * dx + dy * dy);

		console.log(dist);
		if (dist > 100) {
			energy = Math.min(energy + dist/400, 255);
		}
	}

	lastX = x;
	lastY = y;
});

sphero.connect();
