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
    this.scene.start('GameScene');
  }

  update() {}
}
