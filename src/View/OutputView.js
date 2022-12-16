const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Util/Constants');

const OutputView = {
  printCountOfLottos(countOfLottos) {
    Console.print(`\n${countOfLottos}${MESSAGE.COUNT_OF_LOTTOS}`);
  },
};

module.exports = OutputView;
