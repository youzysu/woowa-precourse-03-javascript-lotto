const { Random, Console } = require('@woowacourse/mission-utils');
const { PRIZE } = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoBonusNumber;
    this.prize;
  }

  decidePrize(userNumbers, userBonusNumber) {
    if (this.compareNumber(userNumbers) === 3) this.prize = PRIZE.THREE;
    if (this.compareNumber(userNumbers) === 4) this.prize = PRIZE.FOUR;
    if (this.compareNumber(userNumbers) === 5) {
      this.makeBonusNumber();
      if (userBonusNumber === this.lottoBonusNumber)
        this.prize = PRIZE.FIVE_BONUS;
      if (userBonusNumber !== this.lottoBonusNumber) this.prize = PRIZE.FIVE;
    }
    if (this.compareNumber(userNumbers) === 6) this.prize = PRIZE.SIX;

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
      this.lottoBonusNumber = randomNumber;
    }
  }

  printNumbers() {
    const sorted = this.#numbers.sort((a, b) => a - b).join(', ');
    Console.print(`[${sorted}]`);
  }
}

module.exports = Lotto;
