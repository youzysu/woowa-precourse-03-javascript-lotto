const Ticket = require('./Ticket');
const { Random } = require('@woowacourse/mission-utils');
const { TICKET, ERROR } = require('./Constants');

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
      this.ticketCount = userMoney / TICKET.PRICE;
    }

    return this.ticketCount;
  }

  isValidMoney(userMoney) {
    if (userMoney % TICKET.PRICE !== 0) {
      throw new Error(ERROR.NOT_THOUSANDS);
    }

    if (userMoney < TICKET.PRICE) {
      throw new Error(ERROR.LESS_MONEY);
    }

    return true;
  }
}

module.exports = TicketMachine;
