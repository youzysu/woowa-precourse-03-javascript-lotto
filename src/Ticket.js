const { Random } = require('@woowacourse/mission-utils');

class Ticket {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.bonusNumber;
  }

  compareNumber(userNumbers) {
    let countSame = 0;

    userNumbers.map((userNumber) => {
      if (this.#numbers.includes(userNumber)) countSame += 1;
    });

    return countSame;
  }

  makeBonusNumber() {
    const randomNumber = Random.pickNumberInRange(1, 45);

    if (this.#numbers.includes(randomNumber)) {
      this.makeBonusNumber();
    }

    if (!this.#numbers.includes(randomNumber)) {
      this.bonusNumber = randomNumber;
    }

    return this.bonusNumber;
  }
}

module.exports = Ticket;
