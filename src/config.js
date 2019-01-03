import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  autoResize: true,
  pixelArt: true, // Force the game to scale images up crisply
  parent: 'content',
  localStorageName: 'phaseres6webpack',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      fps: 60,
      gravity: { y: 0 }
    }
  }
};
