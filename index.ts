#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number [Done]

// 2) User input for guessing number [Done]

// 3) Compare user input with computer generated number and show result  [Done]

let randomNumber = Math.floor(Math.random() * 6 + 1); 

let answers  =  await inquirer.prompt([
    {
     name: "userGuessedNumber",
     type: "number",
     message: "Please enter your guessed number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You got it right:");
} else{
    console.log("Sorry, that's wrong:");
}