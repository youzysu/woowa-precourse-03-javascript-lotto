const { Random } = require('@woowacourse/mission-utils');

class Ticket {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.ticketBonusNumber;
    this.prize;
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

  decidePrize(lottoNumbers, lottoBonusNumber) {
    if (this.compareNumber(lottoNumbers) === 3) this.prize = three;
    if (this.compareNumber(lottoNumbers) === 4) this.prize = four;
    if (this.compareNumber(lottoNumbers) === 5) {
      const randomNumber = this.makeBonusNumber();
      if (lottoBonusNumber === randomNumber) this.prize = fiveBonus;
      if (lottoBonusNumber !== randomNumber) this.prize = five;
    }
    if (this.compareNumber(lottoNumbers) === 6) this.prize = six;

    return this.prize;
  }
}

module.exports = Ticket;
