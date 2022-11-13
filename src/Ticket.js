class Ticket {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  compareNumber(userNumbers) {
    let countSame = 0;

    userNumbers.map((userNumber) => {
      if (this.#numbers.includes(userNumber)) countSame += 1;
    });

    return countSame;
  }
}

module.exports = Ticket;
