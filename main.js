
// task ----------------------- 1;

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

// task ----------------------- 2;

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

// task ----------------------- 3;

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

// task ----------------------- 4;

function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const generatePassword = `${obj.siteName}#${obj.name}@${obj.birthYear}`;
    const newPassword = generatePassword.charAt(0).toUpperCase() + generatePassword.slice(1);
    return newPassword;
}

// task ----------------------- 5;

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let withoutPayingTax = 0;
    let excludingTax = 0;

    for (const number of arr) {
        if (number < 3000) {
            withoutPayingTax += number;
        }
        else if (number >= 3000) {
            const tax = number / (100 / 20);
            const total = number - tax;
            excludingTax = + total;
        }
    }

    const excludingTaxMyAllMoney = withoutPayingTax + excludingTax;
    const totalMoneySaved = excludingTaxMyAllMoney - livingCost;

    if (totalMoneySaved < 0) {
        return "earn more";
    }

    return totalMoneySaved;
}