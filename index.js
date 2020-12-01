const chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Enter your name : ");

console.log(chalk.blue("\nHello " + userName + "! Welcome to the Marvel Trivia\n"));

var list = [
  questionOne ={ 
    question: "What is the name of Wanda's brother?\n a. Sam \n b. Pietro \n c. Flash \n ",
    answer: "b",

  },
  questionTwo ={
    question : "\nIn which movie was Thanos first seen?\n a. Avengers(2012)\n b. Gaurdians of the Galaxy(Part 1)\n c. Avengers Ifinity war\n " ,
    answer: "a",
  },
  questionThree = {
    question : "Where was the fight between Team Captain America and Team Iron Man in the movie Captain America Civil war?\n a. Amsterdam\n b. Moscow\n c. Berlin\n",
    answer : "c",
  },
  questionFour = {
    question : "What is the name of the Hawkeye's youngest child?\n a. Cooper\n b. Nathaniel\n c. Lila\n",
    answer : "b",
  },
  questionFive = {
    question : "How many Ph.D's does Bruce Banner have?\n a. 5\n b. 7\n c. 4\n",
    answer : "b",
  },
  questionSix = {
    question : "How many times was Nick Fury shown dead and brought back alive in the movie series until now?\n a. 3\n b. 1\n c. 2\n ",
    answer: "c",
  },
  questionSeven = {
    question : "Where did Hawkeye and Black widow first meet?\n a. Tokyo\n b. New York\n c. Budapest\n ",
    answer : "c",
  },
  questionEight = {
    question : "Which stone is known to be in the form of Malekith?\n a. Power Stone\n b. Reality Stone\n c. Space Stone\n",
    answer : "b",
  },
  questionNine = {
    question : "Who made the Vibranium Shield used by Captain America?\n a. Howard Stark\n b. Tony Stark\n c. Hank Pym\n",
    answer : "a",
  },
  questionTen = {
    question : "What was the core element used in Tony Stark's heart core before he created a new element in the movie Iron Man 2?\n a. Chromium\n b. Palladium\n c. Vibranium\n",
    answer: "b",
  }
];

for ( var i=0; i < list.length; i++){
  play(list[i].question, list[i].answer);
}


function play(question, answer){
 var userAnswer = readlineSync.question(question);
 console.log(chalk.blue("You answered "+ userAnswer));

 if (userAnswer === answer){
   console.log(chalk.green("You are right!"));
   score++;
} else {
  console.log(chalk.red("You are wrong!"));
}
 console.log(chalk.blue("score is " + score));
 console.log("-----------");
}

console.log(chalk.red("\nYour total score is " + score));


if(score === 10 ){
  console.log("You've made a new " + chalk.red("HIGHSCORE!"));
  console.log(chalk.yellow("The high scores are:\n #1 Uday 10\n #2 "+ userName + " 10"));
} else if (score === 9){
  console.log(chalk.green("Pretty close for a high score!"));
  console.log(chalk.yellow("The high scores are:\n #1 Uday 10\n #2" + userName + " 9\n"));
} else {
  console.log("Your score is " + score);
}
