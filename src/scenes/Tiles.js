/* globals __DEV__ */
import Phaser from 'phaser';

let controls;

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

  preload() {
    this.load.image(
      'tiles',
      'https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilesets/catastrophi_tiles_16_blue.png'
    );
    this.load.tilemapCSV(
      'map',
      'https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/tilemaps/catastrophi_level3.csv'
    );
  }

  create() {
    // When loading a CSV map, make sure to specify the tileWidth and tileHeight!
    const map = this.make.tilemap({
      key: 'map',
      tileWidth: 16,
      tileHeight: 16
    });
    const tileset = map.addTilesetImage('tiles');
    const layer = map.createStaticLayer(0, tileset, 0, 0); // layer index, tileset, x, y

    // Phaser supports multiple cameras, but you can access the default camera like this:
    const camera = this.cameras.main;

    // Set up the arrows to control the camera
    const cursors = this.input.keyboard.createCursorKeys();
    controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: camera,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5
    });

    // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Help text that has a "fixed" position on the screen
    this.add
      .text(16, 16, 'Arrow keys to scroll', {
        font: '18px monospace',
        fill: '#ffffff',
        padding: { x: 20, y: 10 },
        backgroundColor: '#000000'
      })
      .setScrollFactor(0);
  }

  update(time, delta) {
    // Apply the controls to the camera each update tick of the game
    controls.update(delta);
  }
}
