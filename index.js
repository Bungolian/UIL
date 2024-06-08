// BACKGROUND FUNCTIONS 
let x;
let y;
let answer;
let result = "Problem does not exist";
let inputProblem;

class multiplicationTricks{
//D for deriving the trick for examples. 
    foiling2x2(){
        x = Math.floor(Math.random() * 99);
        y = Math.floor(Math.random() * 99);
        result = x * y;
        return `${x} * ${y}`;
    }   

    trick2by11(){
        x = Math.floor(Math.random() * 99);
        y = 11;
        result = x * y;
        return `${x} * ${y}`; 
    }
    Dtrick2by11(){
        trick2by11()
    }

    trick3by11 (){
        x = Math.floor(Math.random() * 999);
        y = 11;
        result = x * y;
        return `${x} * ${y}`; 
    }
}

class memorize {
    squaresBasic(){
        x = Math.floor(Math.random() * 30);
        result = x * x;
        return `${x}^2`;
    }
}

//ADDING OBJECTS
let mTricks = new multiplicationTricks;
let memTricks = new memorize;

// WEBPAGE FUNCTIONALITY
const display = document.getElementById("display");
const answerDisplay = document.getElementById("answer");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function generateProblem(inputProblem){
    display.value = inputProblem;
    //display.value = "working";
}
function reveal(){
    answerDisplay.value = result;
}
function checkAnswer(input, inputProblem){ // not sure if this works... 
    if (answer = result){
        generateProblem(inputProblem);
    }

}


