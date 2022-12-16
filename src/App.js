const LottoGame = require('./Controller/LottoGame');

class App {
  #game;

  constructor() {
    this.#game = new LottoGame();
  }

  play() {
    this.#game.start();
  }
}

module.exports = App;
