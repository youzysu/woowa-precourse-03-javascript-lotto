const { MESSAGE } = require('../src/Constants');

const WinningLotto = require('../src/WinningLotto');

describe('당첨 로또 클래스 테스트', () => {
  test('당첨 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(MESSAGE.LESS_NUMBER);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(MESSAGE.DUPLICATED_NUMBER);
  });

  // 아래에 추가 테스트 작성 가능
});
