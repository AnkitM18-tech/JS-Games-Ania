const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// const rockBtn = document.getElementById('rock');
// const paperBtn = document.getElementById('paper');
// const scissorBtn = document.getElementById('scissor');
const possibleChoices = document.querySelectorAll("button");
let userChoice = null;
let computerChoice = null;
let result = null;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;// 1, 2 ,3 
    // console.log(randomNumber);

    if(randomNumber === 1){
        computerChoice = "rock";
    } else if(randomNumber === 2){
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "it's a draw";
    }else if(computerChoice === "rock" && userChoice === "paper"){
        result = "you win";
    }else if(computerChoice === "paper" && userChoice === "scissor"){
        result = "you win";
    }else if(computerChoice === "scissor" && userChoice === "rock"){
        result = "you win";
    } else {
        result = "computer wins";
    }
    resultDisplay.innerHTML = result;
}