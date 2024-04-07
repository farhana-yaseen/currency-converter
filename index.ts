#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency:any = {
    USD: 1,            // base currency
    AUD: 1.52,         //Australian Dollar
    EUR: 0.92,
    SAR: 3.75,        //Saudi Riyal
    PKR: 278
}

let condition = true;

console.log(chalk.bgBlue.bold.italic("\n\t Currency Exchage Calculator \n"));

while(condition){
let answer = await inquirer.prompt(
    [
        {
            name:"from",
            type: "list",
            message: chalk.blue.bold("Please select from currency"),
            choices: ["USD", "AUD", "EUR", "SAR", "PKR"]

        },
        {
            name:"to",
            type: "list",
            message: chalk.blue.bold("Please select To currency"),
            choices: ["USD", "AUD", "EUR", "SAR", "PKR"]

        },
        {
            name:"amount",
            type: "number",
            message: chalk.blue.bold("Please Enter your Amount"),
           
        }
    ]
);

 let fromCurrencyAns = currency[answer.from];   //store answer of from currency and currency rate
 let toCurrencyAns = currency[answer.to];      //store answer of to currency and currency rate
 let userAmount = answer.amount;               //store answer of user enter amount 

let baseCurrency = userAmount / fromCurrencyAns;
let convertAmount = baseCurrency * toCurrencyAns;
let totalAmount = Math.round(convertAmount);
console.log(chalk.bgBlue.bold(`\n Total Amount : ${totalAmount} \n`));

const again = await inquirer.prompt(
    {
      name: "againConvert",
      type: "confirm", 
      message: "Do you want to convert again",
      default: false 
    }
)
condition = again.againConvert
}