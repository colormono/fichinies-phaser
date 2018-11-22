/* globals __DEV__ */
import Phaser from 'phaser';
import Mushroom from '../sprites/Mushroom';

/**
 * GameScene
 *
 * @constructor
 * @extends {Phaser.Scene}
 */
export default class extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene',
      physics: {
        default: 'matter',
        matter: {
          enableSleeping: true
        }
      }
    });
  }
  init() {}
  preload() {
    //this.load.image('logo', 'assets/sprites/logo.png');
  }

  create() {
    this.ball = this.matter.add.image(50, 0, 'mushroom');

    this.ball.setRectangle();
    this.ball.setFriction(0.005);
    this.ball.setBounce(0.6);
    this.ball.setVelocityX(1);
    this.ball.setAngularVelocity(0.15);

    this.mushroom = new Mushroom({
      scene: this,
      x: 400,
      y: 300,
      asset: 'mushroom'
    });

    this.add.existing(this.mushroom);
    this.add.text(100, 100, 'Phaser 3 + MatterJs ', {
      font: '64px Bangers',
      fill: '#7744ff'
    });

    const ground = this.matter.add.image(400, 400, 'platform');

    ground.setStatic(true);
    ground.setScale(2, 0.5);
    ground.setAngle(10);
    ground.setFriction(0.005);
  }

  update() {
    if (this.ball.y > 600) {
      this.ball.setPosition(50, 0);
      this.ball.setVelocity(0, 0);
      this.scene.start('ArcadeScene');
    }
  }
}
