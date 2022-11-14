const { Random, Console } = require('@woowacourse/mission-utils');
const { PRIZE } = require('./Constants');

class Ticket {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.ticketBonusNumber;
    this.prize;
  }

  decidePrize(lottoNumbers, lottoBonusNumber) {
    if (this.compareNumber(lottoNumbers) === 3) this.prize = PRIZE.THREE;
    if (this.compareNumber(lottoNumbers) === 4) this.prize = PRIZE.FOUR;
    if (this.compareNumber(lottoNumbers) === 5) {
      const randomNumber = this.makeBonusNumber();
      if (lottoBonusNumber === randomNumber) this.prize = PRIZE.FIVE_BONUS;
      if (lottoBonusNumber !== randomNumber) this.prize = PRIZE.FIVE;
    }
    if (this.compareNumber(lottoNumbers) === 6) this.prize = PRIZE.SIX;

    return this.prize;
  }

  compareNumber(lottoNumbers) {
    let sameNumberCount = 0;

    lottoNumbers.map((lottoNumber) => {
      if (this.#numbers.includes(lottoNumber)) sameNumberCount += 1;
    });

    return sameNumberCount;
  }

  makeBonusNumber() {
    const randomNumber = Random.pickNumberInRange(1, 45);

    if (this.#numbers.includes(randomNumber)) {
      this.makeBonusNumber();
    }

    if (!this.#numbers.includes(randomNumber)) {
      this.ticketBonusNumber = randomNumber;
    }

    return this.ticketBonusNumber;
  }

  printNumbers() {
    const sorted = this.#numbers.sort((a, b) => a - b).join(', ');
    Console.print(`[${sorted}]`);
  }
}

module.exports = Ticket;
