const WinningLotto = require('./WinningLotto');
const LottoMachine = require('./LottoMachine');
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, PROFIT, RESULT } = require('./Constants');

class Controller {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.countOfLottos;
    this.lottoList;
    this.winningLotto;
    this.winningLottoNumbers;
    this.winningLottoBonusNumber;
    this.result = { three: 0, four: 0, five: 0, fiveBonus: 0, six: 0 };
    this.profit;
  }

  start() {
    this.inputUserMoney();
  }

  inputUserMoney() {
    Console.readLine(MESSAGE.ENTER_USER_MONEY, (userMoney) => {
      this.countOfLottos = this.lottoMachine.countOfLottos(userMoney);
      this.lottoList = this.lottoMachine.makeLottoList(userMoney);

      this.printLottoCount();
    });
  }

  printLottoCount() {
    this.lottoMachine.printLottoCount();
    this.lottoMachine.printLottos();
    this.inputUserNumbers();
  }

  inputUserNumbers() {
    Console.readLine(MESSAGE.ENTER_USER_NUMBER, (userInput) => {
      const userInputNumbers = userInput.split(',').map((str) => Number(str));
      this.winningLotto = new WinningLotto(userInputNumbers);
      this.winningLottoNumbers = userInputNumbers;

      this.inputUserBonusNumber();
    });
  }

  inputUserBonusNumber() {
    Console.readLine(MESSAGE.ENTER_USER_BONUS_NUMBER, (userInput) => {
      const userInputNumber = Number(userInput);
      if (this.winningLotto.isValidBonusNumber(userInputNumber)) {
        this.winningLottoBonusNumber = userInputNumber;
      }

      this.printResult();
    });
  }

  printResult() {
    this.calculateProfit();
    const profitRate = ((this.profit / this.countOfLottos) * 100).toFixed(1);

    Console.print(MESSAGE.PRINT_RESULT);
    Console.print(RESULT.THREE + `${this.result.three}` + RESULT.UNIT);
    Console.print(RESULT.FOUR + `${this.result.four}` + RESULT.UNIT);
    Console.print(RESULT.FIVE + `${this.result.five}` + RESULT.UNIT);
    Console.print(RESULT.FIVE_BONUS + `${this.result.fiveBonus}` + RESULT.UNIT);
    Console.print(RESULT.SIX + `${this.result.six}` + RESULT.UNIT);
    Console.print(RESULT.PROFIT + `${profitRate}` + RESULT.ENDING);
    Console.close();
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

  calculateResult() {
    this.lottoList.forEach((lotto) => {
      const lottoResult = lotto.decidePrize(
        this.winningLottoNumbers,
        this.winningLottoBonusNumber
      );
      this.result[lottoResult] += 1;
    });
  }
}

module.exports = Controller;
