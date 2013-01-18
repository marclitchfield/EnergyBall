# Node Sphero

## How to use

    npm install node-sphero

Connect your [Sphero](http://gosphero.com) to your laptop over bluetooth. At this time only OSX 10.8/Windows 7 has been tested.

Add Sphero to your app:

```javascript
var roundRobot = require('node-sphero');
var sphero = new roundRobot.Sphero();

sphero.on('connected', function(ball) {
  ball.setRGBLED(0, 255, 0, false);
});

sphero.connect();
```

Run that and your sphero should turn #00FF00... green.

Check out the examples for more ideas.

## OS X

You will need Node.js 8.x and the build tool provided by xcode. The Command Line tools for xcode can be downloaded from Apple's [developer site](https://developer.apple.com/downloads/index.action) for free. 

You can install NodeJS for by downloading it from [nodejs.org](http://nodejs.org)


## Windows

You will need node.js 8.x (32-bit only), (node-gyp(included with node) / Python 2.x / and the build tools provided by Visual Studio 2010)

You must use the 32bit version of nodejs, because there are issues with the serialport builds on the x64 platform.
You can install NodeJS by downloading it from [nodejs.org](http://nodejs.org/download/) Current 32bit version is available here: [http://nodejs.org/dist/v0.8.9/node-v0.8.9-x86.msi](http://nodejs.org/dist/v0.8.9/node-v0.8.9-x86.msi)

Python. Remember you want the latest 2.x release: [python windows binaries](http://www.python.org/download/releases/)

If you dont have visual studio 2010, you can download the [express edition](http://www.microsoft.com/visualstudio/eng/downloads#d-2010-express) for free. You'll want the c++ version, or the all in one.

If have a of Visual Studio OTHER THAN 2010, you might run into some issues. Please read [this](https://github.com/TooTallNate/node-gyp/issues/44)

## In Progress

The rest of the sphero bluetooth api functionality.

## Thanks 

Awesome work by [Bradley Meck](https://github.com/bmeck) who built the initial version.
