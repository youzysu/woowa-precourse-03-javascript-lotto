const Lotto = require('../src/Lotto');
const { Prize } = require('../src/Constants');

describe('로또 클래스 테스트', () => {
  test('당첨 로또와 3개의 번호가 일치하는 경우 이 로또의 prize는 three이다.', () => {
    expect(() => {}).toEqual(PRIZE.THREE);
  });

  test('당첨 로또와 4개의 번호가 일치하는 경우 이 로또의 prize는 four이다.', () => {
    expect(() => {}).toEqual(PRIZE.FOUR);
  });

  test('당첨 로또와 5개의 번호가 일치하고 보너스 번호는 다른 경우 이 로또의 prize는 five이다.', () => {
    expect(() => {}).toEqual(PRIZE.FIVE);
  });

  test('당첨 로또와 5개의 번호가 일치하고 보너스 번호도 같은 경우 이 로또의 prize는 fiveBonus이다.', () => {
    expect(() => {}).toEqual(PRIZE.FIVE_BONUS);
  });

  test('당첨 로또와 6개의 번호가 일치하는 경우 이 로또의 prize는 six이다.', () => {
    expect(() => {}).toEqual(PRIZE.SIX);
  });
});
