import Phaser from 'phaser';

import BootScene from './scenes/Boot';
import SplashScene from './scenes/Splash';
import GameScene from './scenes/Game';
import ArcadeScene from './scenes/Arcade';
import TilesScene from './scenes/Tiles';
import TilesScene2 from './scenes/Tiles2';
import TilesScene3 from './scenes/Tiles3';

import config from './config';

const gameConfig = Object.assign(config, {
  scene: [
    BootScene,
    SplashScene,
    GameScene,
    ArcadeScene,
    TilesScene,
    TilesScene2,
    TilesScene3
  ]
});

class Game extends Phaser.Game {
  constructor() {
    super(gameConfig);
  }
}

window.game = new Game();
