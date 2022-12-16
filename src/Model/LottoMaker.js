const { LOTTO } = require('../Util/Constants');

class LottoMaker {
  #countOfLottos;

  constructor() {
    this.#countOfLottos = 0;
  }

  calculateCountOfLottos(userMoney) {
    this.#countOfLottos = userMoney / LOTTO.PRICE;
  }

  getCountOfLottos() {
    return this.#countOfLottos;
  }
}

module.exports = LottoMaker;
