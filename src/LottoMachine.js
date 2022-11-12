class LottoMachine {
  lottoAmount(userMoney) {
    if (userMoney % 1000 === 0) {
      return userMoney / 1000;
    }

    if (userMoney % 1000 !== 0) {
      throw new Error('[ERROR]');
    }
  }
}

module.exports = LottoMachine;
