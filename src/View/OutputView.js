const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, STYLE } = require('../Util/Constants');

const OutputView = {
  printLottos(countOfLottos, lottos) {
    Console.print(`${STYLE.LF}${countOfLottos}${MESSAGE.COUNT_OF_LOTTOS}`);
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto
        .getNumbers()
        .sort((a, b) => a - b)
        .join(STYLE.DIVIDER_NUMBER);
      Console.print(`${STYLE.LEFT_BRACKET}${lottoNumbers}${STYLE.RIGHT_BRACKET}`);
    });
  },
};

module.exports = OutputView;
