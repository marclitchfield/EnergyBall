var spheroModule = require('node-sphero');
var sphero = new spheroModule.Sphero();

var energy = 0;
var last;

Math.cbrt = function(x) {
    var sign = x === 0 ? 0 : x > 0 ? 1 : -1;
    return sign * Math.pow(Math.abs(x), 1/3);
}

sphero.on('connected', function() {
        sphero.setStabilization(false);
        sphero.setBackLED(0);
        sphero.setDataStreaming([
                sphero.sensors.accelerometer_x,
                sphero.sensors.accelerometer_y,
                sphero.sensors.accelerometer_z
        ]);
});

sphero.on('notification', function(message) {
        var accel = {
                x: message.DATA.readInt16BE(0),
                y: message.DATA.readInt16BE(2),
                z: message.DATA.readInt16BE(4)
        };

        if (last) {
                var dx = accel.x - last.x;
                var dy = accel.y - last.y;
                var dz = accel.z - last.z;
                var dist = Math.cbrt(dx*dx*dx + dy*dy*dy + dz*dz*dz);

                if (dist > 100) {
                        energy = Math.min(energy + dist/400, 255);
                }
        }

        sphero.setRGBLED(0, 0, energy, false);
        energy = Math.max(energy - 2, 0);

        console.log(energy);

        last = accel;
});

sphero.connect();

