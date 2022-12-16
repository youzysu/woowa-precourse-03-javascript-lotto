const LottoMaker = require('../Model/LottoMaker');
const Validator = require('../Util/Validator');
const { InputView, OutputView } = require('../View/IOView');

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

  printLottos() {
    const countOfLottos = this.#lottoMaker.getCountOfLottos();
    const lottos = this.#lottoMaker.getLottos();
    OutputView.printLottos(countOfLottos, lottos);
  }
}

module.exports = LottoGame;
