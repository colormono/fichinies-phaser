import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  parent: 'content',
  width: 800,
  height: 600,
  localStorageName: 'phaseres6webpack',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      fps: 60,
      gravity: { y: 200 }
    }
  }
};
