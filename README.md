## Fichines

### Acceder a la Rapsberry vía SSH

Primero se realizaron pruebas con Raspi y Johnny-Five...

1.  Escanear red local: `~ ping raspberrypi.local`

Devuelve algo como

```
PING raspberrypi.local (192.168.1.113): 56 data bytes
Request timeout for icmp_seq 0
64 bytes from 192.168.1.113: icmp_seq=0 ttl=64 time=1114.317 ms
64 bytes from 192.168.1.113: icmp_seq=1 ttl=64 time=109.375 ms
64 bytes from 192.168.1.113: icmp_seq=2 ttl=64 time=7.389 ms
...
```

2.  Conectarse: `~ ssh pi@192.168.1.113`

**(pass por defecto: raspberry)**

## Enlaces útiles

- [Socket.IO Docs](https://socket.io/docs/)
- [Socket.IO-Client Docs](https://github.com/socketio/socket.io-client)
- [Phaser3 Examples](http://labs.phaser.io)
- [Phaser3 and React Game Example](https://codepen.io/Hamatek/pen/mEBJpK)
- [Phaser React and Redux context](https://github.com/photonstorm/phaser/issues/3532)
- [How to code the “Game of Life” with React](https://medium.freecodecamp.org/create-gameoflife-with-react-in-one-hour-8e686a410174)
- [Timers in Node](https://nodejs.org/en/docs/guides/timers-in-node/)
- [React router navigate programmatically](https://www.webdeveloperpal.com/2018/03/07/react-router-v4-navigate-and-redirect-programmatically/)
- [Ract phaser2 boilerplate](https://github.com/ArcQ/phaser-react-starter/)

* [Computer Vision for Artists and Designers: Pedagogic Tools and Techniques for Novice Programmers](http://www.flong.com/texts/essays/essay_cvad/) - By Golan Levin
* [Intermediate Computer Vision with openFrameworks](https://github.com/kylemcdonald/ofxCv/wiki/Intermediate-Computer-Vision-with-openFrameworks) - By Kyle McDonald

* [Raspi-IO](https://github.com/nebrius/raspi-io/) - An IO plugin for Johnny-Five that provides support for the Raspberry Pi
* [Johnny-Five](http://johnny-five.io/) - JavaScript Robotics & IoT Platform
* [Hello Johnny-Five](https://www.hackster.io/IainIsCreative/setting-up-the-raspberry-pi-and-johnny-five-56d60f)
* [Ejemplo Relay con Johnny-Five](http://johnny-five.io/examples/relay/)
* [Otro ejemplo de Relay](https://bocoup.com/blog/javascript-relay-with-johnny-five)
* [The comprehensive GPIO Pinout guide for the Raspberry Pi.](https://pinout.xyz/)

* [OpenCV](https://docs.opencv.org/3.3.1/d5/d10/tutorial_js_root.html) - Introduction to OpenCV.js and Tutorials

### Tutoriales

- https://codeburst.io/isomorphic-web-app-react-js-express-socket-io-e2f03a469cd3
- https://tutorialedge.net/javascript/react/react-socket-io-tutorial/
- https://www.valentinog.com/blog/socket-io-node-js-react/

# Phaser + ES6 + Webpack.

#### A bootstrap project to create games with Phaser + ES6 + Webpack.

![Phaser+ES6+Webpack](https://raw.githubusercontent.com/lean/phaser-es6-webpack/master/assets/images/phaser-es6-webpack.jpg)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Phaser 3 supported in this branch: https://github.com/lean/phaser-es6-webpack/tree/phaser3

## Features

- ESLINT with JavaScript Standard Style configuration
- Next generation of Javascript
- Browsers are automatically updated as you change project files
- Webpack ready
- WebFont Loader
- Multilanguage support
- PWA Support

## Typescript

If you need typescript support checkout the `typescript` branch. Thanks to @MatsMaker

# Setup

You'll need to install a few things before you have a working copy of the project.

## 1. Clone this repo:

Navigate into your workspace directory.

Run:

`git clone https://github.com/lean/phaser-es6-webpack.git`

## 2. Install node.js and npm:

https://nodejs.org/en/

## 3. Install dependencies (optionally you can install [yarn](https://yarnpkg.com/)):

Navigate to the cloned repo's directory.

Run:

`npm install`

or if you chose yarn, just run `yarn`

## 4. Run the development server:

Run:

`npm run dev`

This will run a server so you can run the game in a browser. It will also start a watch process, so you can change the source and the process will recompile and refresh the browser automatically.

To run the game, open your browser and enter http://localhost:3000 into the address bar.

## Build for deployment:

Run:

`npm run deploy`

This will optimize and minimize the compiled bundle.

## Deploy for cordova:

Make sure to uncomment the cordova.js file in the src/index.html and to update config.xml with your informations. (name/description...)

More informations about the cordova configuration:
https://cordova.apache.org/docs/en/latest/config_ref/

There is 3 platforms actually tested and supported :

- browser
- ios
- android

First run (ios example):

```
npm run cordova
cordova platform add ios
cordova run ios
```

Update (ios example):

```
npm run cordova
cordova platform update ios
cordova run ios
```

This will optimize and minimize the compiled bundle.

## Config:

before you get to work you will surely want to check the config file. You could setup dimensions, webfonts, etc

## Webfonts:

In the config file you can specify which webfonts you want to include. In case you do not want to use webfonts simply leave the array empty

## Credits

Big thanks to these great repos:

https://github.com/belohlavek/phaser-es6-boilerplate

https://github.com/cstuncsik/phaser-es6-demo

## Contributors

https://github.com/RenaudROHLINGER

## Links

- [Examples](https://labs.phaser.io/) - Official examples
- https://rexrainbow.github.io/phaser3-rex-notes/docs/site/
- [Tiled’s documentation](http://docs.mapeditor.org/en/stable/manual/introduction/)
- [Game from Scratch Tiled tutorial series](http://www.gamefromscratch.com/post/2015/10/14/Tiled-Map-Editor-Tutorial-Series.aspx)
- [Dungeon generator library](https://github.com/mikewesthad/dungeon)
- [Phaser 3 Webpack Project Template](https://github.com/photonstorm/phaser3-project-template)

## Tutorials

- [Modular Game Worlds in Phaser 3](https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6)
