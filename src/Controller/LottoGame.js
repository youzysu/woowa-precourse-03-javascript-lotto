const LottoMaker = require('../Model/LottoMaker');
const Validator = require('../Util/Validator');
const { InputView, OutputView } = require('../View/IOView');

class LottoGame {
  #lottoMaker;

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
      this.printLottos();
    });
  }

  printLottos() {
    const countOfLottos = this.#lottoMaker.getCountOfLottos();
    OutputView.printCountOfLottos(countOfLottos);
  }
}

module.exports = LottoGame;
