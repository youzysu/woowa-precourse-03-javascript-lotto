const { Random } = require('@woowacourse/mission-utils');

class ticketMachine {
  ticketAmount(userMoney) {
    if (this.isValidMoney(userMoney)) {
      return userMoney / 1000;
    }
  }

  isValidMoney(userMoney) {
    if (userMoney % 1000 !== 0) {
      throw new Error('[ERROR]');
    }

    if (userMoney < 1000) {
      throw new Error('[ERROR]');
    }

    return true;
  }
}

module.exports = ticketMachine;
