const { Random } = require('@woowacourse/mission-utils');

class TicketMachine {
  constructor(userMoney) {
    this.isValidMoney(userMoney);
    this.ticketList = [];
  }

  printTickets() {
    this.ticketList.forEach((ticket) => ticket.printTicketNumbers());
  }

  makeTicketList(userMoney) {
    const countOfTickets = this.countOfTickets(userMoney);

    for (let count = 1; count <= countOfTickets; count++) {
      const TicketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const ticket = new Ticket(lottoNumbers);
      this.ticketList.push(ticket);
    }

    return this.ticketList;
  }

  countOfTickets(userMoney) {
    if (this.isValidMoney(userMoney)) {
      return userMoney / 1000;
    }
  }

  isValidMoney(userMoney) {
    if (userMoney % 1000 !== 0) {
      throw new Error('[ERROR]');
    }

    if (userMoney < 1000) {
      throw new Error('[ERROR]');
    }

    return true;
  }
}

module.exports = TicketMachine;
