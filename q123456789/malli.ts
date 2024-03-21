#! /usr/bin/env node 
import inquirer from "inquirer"
//asking question form users through inquirer
let answers=await inquirer.prompt([
   {message :'enter first number', type: "number", name: 'firstNumber'},
   {message :'enter second number', type: "number", name: 'secondNumber'},
   {
   mesaage:"select one operator to perform operation",
   type:'list',
   name:'operator',
   choices:['addition','subtraction','multiplication', 'division'],
   },
]);

console.log(answers)
// conditional statement if or else
if(answers.operator ==='addition'){
   console.log(answers.firstNumber + answers.secondNumber)}
   else if (answers.operator ==='subtraction'){
       console.log(answers.firstNumber - answers.secondNumber)}
       else if (answers.operator ==='multiplication'){
         console.log(answers.firstNumber * answers.secondNumber)}
         else if (answers.operator ==='division'){
            console.log(answers.firstNumber / answers.secondNumber)}
