const LottoMaker = require('../Model/LottoMaker');
const Validator = require('../Util/Validator');
const { InputView } = require('../View/IOView');

class LottoGame {
  #lottoMaker;

  #lottos;

  constructor() {
    this.#lottoMaker = new LottoMaker();
  }

  start() {
    this.requestBuyLotto();
  }

  requestBuyLotto() {
    InputView.readUserMoney((userInput) => {
      const userMoney = Number(userInput);
      Validator.validateUserMoney(userMoney);
      this.#lottoMaker.calculateCountOfLottos(userMoney);
      this.makeLottos();
    });
  }

  makeLottos() {
    this.#lottoMaker.makeLottos();
    this.printLottos();
  }
}

module.exports = LottoGame;
