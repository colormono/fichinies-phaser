/* globals __DEV__ */
import Phaser from 'phaser';

/**
 * TilesScene
 *
 * @constructor
 * @extends {Phaser.Scene}
 */
export default class extends Phaser.Scene {
  constructor() {
    super({
      key: 'TilesScene',
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
          fps: 60,
          gravity: { y: 0 }
        }
      }
    });
  }
  init() {}
  preload() {}

  create() {
    const { width, height } = this.sys.game.config;
  }
  update() {}
}
