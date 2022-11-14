const { MESSAGE } = require('./Constants');

class WinningLotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const removeDuplicate = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error(MESSAGE.LESS_NUMBER);
    }

    if (removeDuplicate.size !== numbers.length) {
      throw new Error(MESSAGE.DUPLICATED_NUMBER);
    }
  }

  isValidBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(MESSAGE.SAME_NUMBER);
    }
    return true;
  }
}

module.exports = WinningLotto;
