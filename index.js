// BACKGROUND FUNCTIONS 
let x;
let y;
let answer;
let result = "Problem does not exist";
let inputProblem;

class multiplicationTricks{

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

    trick3by11 (){
        x = Math.floor(Math.random() * 999);
        y = 11;
        result = x * y;
        return `${x} * ${y}`; 
    }
}
//ADDING OBJECTS
let mTricks = new multiplicationTricks;

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
}
function reveal(){
    answerDisplay.value = result;
}
function checkAnswer(input, inputProblem){ // not sure if this works... 
    if (answer = result){
        generateProblem(inputProblem);
    }

}


