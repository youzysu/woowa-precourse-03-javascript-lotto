const Ticket = require('./Ticket');
const { Random } = require('@woowacourse/mission-utils');

class TicketMachine {
  constructor() {
    this.ticketCount;
    this.ticketList = [];
  }

  printTickets() {
    this.ticketList.forEach((ticket) => ticket.printNumbers());
  }

  makeTicketList(userMoney) {
    for (let count = 1; count <= this.ticketCount; count++) {
      const TicketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const ticket = new Ticket(TicketNumbers);
      this.ticketList.push(ticket);
    }

    return this.ticketList;
  }

  countOfTickets(userMoney) {
    if (this.isValidMoney(userMoney)) {
      this.ticketCount = userMoney / 1000;
    }

    return this.ticketCount;
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
