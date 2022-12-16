const { LOTTO, ERROR } = require('./Constants');
const { Quit } = require('../View/IOView');

const Validator = {
  validateUserMoney(userMoney) {
    this.checkMoneyRange(userMoney);
    this.checkMoneyUnit(userMoney);
  },

  checkMoneyUnit(userMoney) {
    if (userMoney % LOTTO.PRICE !== 0) Quit.byException(ERROR.NOT_THOUSANDS);
  },

  checkMoneyRange(userMoney) {
    if (userMoney < LOTTO.PRICE) Quit.byException(ERROR.LESS_THOUSAND);
  },
};

module.exports = Validator;
