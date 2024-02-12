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




function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }

    const changedName = name.toLowerCase();
    const lastNameIndex = changedName.length - 1;

    if (changedName[lastNameIndex] === "a" || changedName[lastNameIndex] === "y" || changedName[lastNameIndex] === "i" || changedName[lastNameIndex] === "e" || changedName[lastNameIndex] === "o" || changedName[lastNameIndex] === "u" || changedName[lastNameIndex] === "w") {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}





function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    const numbers = [];
    for (const element of array) {
        if (typeof element === "number" && !isNaN(element)) {
            numbers.push(element);
        }
    }
    return numbers;
}