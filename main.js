function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }

    const ticketPrice = 120;
    const totalTicketPrice = ticketPrice * ticketSale;

    const securityCost = 500;
    const lunchCost = 8 * 50;
    const totalCost = securityCost + lunchCost;

    const money = totalTicketPrice - totalCost;
    return money;
}