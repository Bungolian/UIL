// BACKGROUND FUNCTIONS 
let trickName = "Problem Type";
let x;
let y;
let equation;
let answer;
let result = "Problem does not exist";


let char = []; 

class multiplicationTricks{
//D for deriving the trick for examples. 
    foiling2x2(){
        trickName = "Foiling 2 Digit Numbers";
        x = Math.floor(Math.random() * 99);
        y = Math.floor(Math.random() * 99);
        result = x * y;
        equation =`${x} * ${y}` 
        return equation;
    }   

    trick2by11(){
        trickName = "11's Trick with 2 Digit Numbers";
        x = Math.floor(Math.random() * 99);
        y = 11;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }

    trick3by11 (){
        trickName = "11's Trick with 3 Digit Numbers";
        x = Math.floor(Math.random() * 999);
        y = 11;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation; 
    }

    //for these tricks I need to create a new readChar() for 3 * 2 formulas. HOWEVER, It will not always be this way. Maybe seperate by using their .length into switch case.
    trick25Lv1 (){ 
        trickName = "25's Trick - Level 1";
        x = Math.floor(Math.random() * 499);
        y = 25;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }
    trick25Lv2 (){ 
        trickName = "25's Trick - Level 2"; // this trick needs decimals somewhere in here too. Literally Anywhere.
        x = Math.floor(Math.random() * 499);
        y = 25;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }
    trick25Lv3 (){ 
        trickName = "25's Trick - Level 3";
        x = Math.floor(Math.random() * 1499);
        y = 25;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }
    trick75(){ 
        x = Math.floor(Math.random() * 450);
        y = 75;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }
}

class memorize {
    squaresBasic(){
        x = Math.floor(Math.random() * 30);
        result = x * x;
        equation = `${x}^2`;
        return equation;
    }
}

//ADDING OBJECTS
let mTricks = new multiplicationTricks;
let memTricks = new memorize;

// WEBPAGE FUNCTIONALITY
const display = document.getElementById("display");
const exampleDisplay = document.getElementById("exampleDisplay");
const stepDisplay = document.getElementById("stepDisplay");
const explainDisplay = document.getElementById("explainDisplay");
let answerDisplay = document.getElementById("answer");
let check = document.getElementById("check");
let nextStep = document.getElementById("nextStep");

function generateProblem(inputProblem){
    if(tricks.length >> 0){
        console.log(tricks);
        eval(randomTrick);
        inputProblem = equation;
        headerDrop.textContent = trickName; // only certain files have header.
        tricks.length = 0;
    }
    console.log(trickName);
    display.value = inputProblem;


    answerDisplay.value = ""; 
    answerDisplay.style.borderColor = "";
}
function reveal(Result){
    if(tricks.length >> 0){
        eval(randomTrick);
        Result = result;
    }
    answerDisplay.value = result;   
}
function checkAnswer(input, inputProblem){
        answer = answerDisplay.value;
        if (answer == result){
           answerDisplay.style.borderColor = "#57d945";
           
        }
        else{
            answerDisplay.style.borderColor = "#ff0000";
        }
}

