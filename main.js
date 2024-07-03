// BACKGROUND FUNCTIONS 
let x;
let y;
let equation;
let answer;
let result = "Problem does not exist";

let char = []; 

class multiplicationTricks{
//D for deriving the trick for examples. 
    foiling2x2(){
        x = Math.floor(Math.random() * 99);
        y = Math.floor(Math.random() * 99);
        result = x * y;
        equation =`${x} * ${y}` 
        return equation;
    }   

    trick2by11(){
        x = Math.floor(Math.random() * 99);
        y = 11;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }

    trick3by11 (){
        x = Math.floor(Math.random() * 999);
        y = 11;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation; 
    }

    //for these tricks I need to create a new readChar() for 3 * 2 formulas. HOWEVER, It will not always be this way. Maybe seperate by using their .length into switch case.
    trick25 (){ // need randomizer for y. or set y to multiple values and pick one randomly.
        x = Math.floor(Math.random() * 450);
        y = 25;
        result = x * y;
        equation = `${x} * ${y}`;
        return equation;
    }
    trick75(){ // need randomizer for y. or set y to multiple values and pick one randomly.
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

function clearDisplay(){
    display.value = "";
}
function generateProblem(inputProblem){
    display.value = inputProblem;

    answerDisplay.value = ""; 
    answerDisplay.style.borderColor = "";
}
function reveal(){
    answerDisplay.value = result;   
}
function checkAnswer(input, inputProblem){
        answer = answerDisplay.value;
        if (answer == result){
           console.log("Answer is correct");
           answerDisplay.style.borderColor = "#57d945";
           
        }
        else{
            console.log("Incorrect");	
            answerDisplay.style.borderColor = "#ff0000";
        }
}

