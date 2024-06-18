;

// BACKGROUND FUNCTIONS 
let x;
let y;
let equation;
let answer;
let result = "Problem does not exist";
//let inputProblem;

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
}

class memorize {
    squaresBasic(){
        x = Math.floor(Math.random() * 30);
        result = x * x;
        equation = `${x}^2`;
        return equation;
    }
}

/*
class exampleVisuals{
 
    Dtrick2by11(equation){ // abMMMyy  - Bugs when it is a one digit number...
        ex2by11.readChar(equation);

        ex2by11.step1();

        console.log(char[0]);
        console.log(char[1]);

        console.log(char[5]);
        console.log(char[6]);
    }
}
*/

//ADDING OBJECTS
let mTricks = new multiplicationTricks;
let memTricks = new memorize;
//let examples = new exampleVisuals;


// WEBPAGE FUNCTIONALITY
const display = document.getElementById("display");
const exampleDisplay = document.getElementById("exampleDisplay");
const stepDisplay = document.getElementById("stepDisplay");
const explainDisplay = document.getElementById("explainDisplay");
let answerDisplay = document.getElementById("answer");
let check = document.getElementById("check");

let nextStep = document.getElementById("nextStep"); // i feel like this should be at top for the examples class...

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

