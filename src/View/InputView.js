const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../Util/Constants');

const InputView = {
  readUserMoney(callback) {
    Console.readLine(MESSAGE.ENTER_MONEY, callback);
  },
};

module.exports = InputView;
