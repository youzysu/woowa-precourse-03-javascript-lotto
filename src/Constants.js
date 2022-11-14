const MESSAGE = {
  ENTER_USER_MONEY: '구입금액을 입력해 주세요.\n',
  PRINT_LOTTO_COUNT: '개를 구매했습니다.',
  ENTER_USER_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ENTER_USER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  PRINT_RESULT: '\n당첨 통계\n---\n',
};

const RESULT = {
  THREE: '3개 일치 (5,000원) - ',
  FOUR: '4개 일치 (50,000원) - ',
  FIVE: '5개 일치 (1,500,000원) - ',
  FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX: '6개 일치 (2,000,000,000원) - ',
  UNIT: '개\n',
  PROFIT: '총 수익률은 ',
  ENDING: '%입니다.',
};

const PRIZE = {
  THREE: 'three',
  FOUR: 'four',
  FIVE: 'five',
  FIVE_BONUS: 'fiveBonus',
  SIX: 'six',
};

const PROFIT = {
  THREE: 5,
  FOUR: 50,
  FIVE: 1500,
  FIVE_BONUS: 30000,
  SIX: 2000000,
};

const ERROR = {
  NOT_THOUSANDS: '[ERROR] 1000원 단위의 금액을 입력해주세요.',
  LESS_MONEY: '[ERROR] 1000원보다 큰 금액을 입력해주세요.',
  DUPLICATED_NUMBER: '[ERROR] 로또 번호 중 중복된 번호가 있습니다.',
  LESS_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  SAME_NUMBER: '[ERROR] 로또 번호 중 동일한 번호가 있습니다.',
  SCOPE_OUT: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
};

module.exports = {
  MESSAGE,
  PROFIT,
  PRIZE,
  ERROR,
  RESULT,
};
