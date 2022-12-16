const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../Util/Constants');
const Lotto = require('./Lotto');

class LottoMaker {
  #countOfLottos;

  #lottoList;

  constructor() {
    this.#countOfLottos = 0;
    this.#lottoList = [];
  }

  calculateCountOfLottos(userMoney) {
    this.#countOfLottos = userMoney / LOTTO.PRICE;
  }

  makeLottos() {
    while (this.#lottoList.length < this.#countOfLottos) {
      const randomSixNumbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUM, LOTTO.MAX_NUM, LOTTO.COUNT);
      const lotto = new Lotto(randomSixNumbers);
      this.#lottoList.push(lotto);
    }
  }

  getCountOfLottos() {
    return this.#countOfLottos;
  }

  getLottos() {
    return this.#lottoList;
  }
}

module.exports = LottoMaker;
