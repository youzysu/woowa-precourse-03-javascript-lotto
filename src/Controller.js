const Lotto = require('./Lotto');
const TicketMachine = require('./ticketMachine');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, PROFIT } = require('./Constants');

class Controller {
  constructor() {
    this.ticketMachine = new TicketMachine();
    this.ticketCount;
    this.ticketList;
    this.lotto;
    this.lottoNumbers;
    this.bonusLottoNumber;
    this.result = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    this.profit;
  }

  start() {
    this.inputUserMoney();
  }

  inputUserMoney() {
    Console.readLine(MESSAGE.ENTER_USER_MONEY, (userMoney) => {
      this.ticketCount = this.ticketMachine.countOfTickets(userMoney);
      this.ticketList = this.ticketMachine.makeTicketList(userMoney);

      this.printTicketCount();
    });
  }

  printTicketCount() {
    this.ticketMachine.printTicketCount();
    this.ticketMachine.printTickets();
    this.inputUserNumbers();
  }

  inputUserNumbers() {
    Console.readLine(MESSAGE.ENTER_USER_NUMBER, (userInput) => {
      const userInputNumbers = userInput.split(',').map((str) => Number(str));
      this.lotto = new Lotto(userInputNumbers);
      this.lottoNumbers = userInputNumbers;

      this.inputUserBonusNumber();
    });
  }

  inputUserBonusNumber() {
    Console.readLine(MESSAGE.ENTER_USER_BONUS_NUMBER, (userInput) => {
      const userInputNumber = Number(userInput);
      if (this.lotto.isValidBonusNumber(userInputNumber)) {
        this.bonusLottoNumber = userInputNumber;
      }

      this.printResult();
    });
  }

  calculateResult() {
    this.ticketList.forEach((ticket) => {
      const ticketResult = ticket.decidePrize(
        this.lottoNumbers,
        this.bonusLottoNumber
      );
      this.result[ticketResult] += 1;
    });
  }

  calculateProfit() {
    this.calculateResult();
    this.profit =
      PROFIT.THREE * this.result.three +
      PROFIT.FOUR * this.result.four +
      PROFIT.FIVE * this.result.five +
      PROFIT.FIVE_BONUS * this.result.fiveBonus +
      PROFIT.SIX * this.result.six;
  }

  printResult() {
    this.calculateProfit();
    const profitRate = ((this.profit / this.ticketCount) * 100).toFixed(1);
    Console.print(
      MESSAGE.PRINT_RESULT +
        `3개 일치 (5,000원) - ${this.result.three}개\n` +
        `4개 일치 (50,000원) - ${this.result.four}개\n` +
        `5개 일치 (1,500,000원) - ${this.result.five}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.fiveBonus}개\n` +
        `6개 일치 (2,000,000,000원) - ${this.result.six}개\n` +
        `총 수익률은 ${profitRate}%입니다.`
    );
    Console.close();
  }
}

module.exports = Controller;
