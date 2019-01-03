import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'SplashScene' });
  }

  preload() {
    //
    // load your assets
    //
    this.load.image('mushroom', './assets/images/skull.png');
    this.load.image('platform', './assets/images/platform.png');
  }

  create() {
    //this.scene.start('ArcadeScene');
    this.scene.start('TilesScene3');

    //this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'rain').setOrigin(0);
    //this.logo = this.add.sprite(game.config.width / 2, game.config.height / 2, 'logo');

    this.events.on('resize', resize, this);
  }

  update() {}
}

function resize(width, height) {
  if (width === undefined) {
    width = this.sys.game.config.width;
  }
  if (height === undefined) {
    height = this.sys.game.config.height;
  }

  this.cameras.resize(width, height);

  //this.bg.setSize(width, height);
  //this.logo.setPosition(width / 2, height / 2);
}

window.addEventListener(
  'resize',
  function(event) {
    game.resize(window.innerWidth, window.innerHeight);
  },
  false
);
