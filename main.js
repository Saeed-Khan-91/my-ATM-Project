"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// Initialize user balance and pin code
var myBalance = 5000;
var myPin = 1234;
// Print welcome message
console.log(chalk_1.default.blue("\n \twelcome to Code with Saeed - ATM Machine\n \t"));
var pinAanswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk_1.default.yellow("Enter your pin code:")
    }
]);
if (pinAanswer.pin === myPin) {
    console.log(chalk_1.default.green("\npin is Correct, Login Successfully!\n"));
    //console.log(`Current Account Balance is ${myBalance}`)
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["withdraw Ammount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Ammount") {
        var withdrawAns = await inquirer_1.default.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            var fastCashAns = await inquirer_1.default.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk_1.default.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log("".concat(fastCashAns.fastCash, " withdraw Successfully"));
                console.log("your Remaining Balance is: ".concat(myBalance));
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            var amountAns = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log("".concat(amountAns.amount, " withdraw Sucessfully"));
                console.log("your Remaining Balance is: ".concat(myBalance));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("your Account Balance is: ".concat(myBalance));
    }
}
else {
    console.log(chalk_1.default.red("Pin is Incorrect, Try Again!"));
}
