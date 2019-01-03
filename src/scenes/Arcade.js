/* globals __DEV__ */
import Phaser from 'phaser';
import Mushroom from '../sprites/Mushroom';

/**
 * ArcadeScene
 *
 * @constructor
 * @extends {Phaser.Scene}
 */
export default class extends Phaser.Scene {
  constructor() {
    super({
      key: 'ArcadeScene',
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
          fps: 60,
          gravity: { y: 200 }
        }
      }
    });
  }
  init() {}
  preload() {
    //this.load.image('logo', 'assets/sprites/logo.png');
    this.load.image('sky', '../assets/images/sky.png');
    this.load.image('ground', '../assets/images/platform.png');
    this.load.image('star', '../assets/images/star.png');
    this.load.spritesheet('dude', '../assets/images/dude.png', {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  create() {
    const { width, height } = this.sys.game.config;

    this.add.image(400, 300, 'sky');

    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000'
    });

    this.ball = this.physics.add.image(width / 2, height / 2, 'mushroom');
    this.ball.setDamping(true);
    this.ball.setDrag(0.99);
    this.ball.setMaxVelocity(200);

    var platforms = this.physics.add.staticGroup();
    platforms
      .create(400, 568, 'ground')
      .setScale(2)
      .refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');

    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate(function(child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.stars, platforms);
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      null,
      this
    );

    //ground.setStatic(true);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  collectStar(player, star) {
    star.disableBody(true, true);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
  }
}
