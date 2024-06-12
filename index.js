// BACKGROUND FUNCTIONS 
let x;
let y;
let equation;
let answer;
let result = "Problem does not exist";
let inputProblem;
let str = "Placeholder String";

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
    Dtrick2by11(equation){
        examples.characters(equation);
        
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
class exampleVisuals{
/*  TO DO
Get each token in the variable. - several ways... I think about a lexer and parser...
Create an array to store each character
Come up with individual functions to represent dirivation. 
Use array memories to print it out. 
*/
    characters(equation) { // A way of getting each character. 
        for (let i = 0; i < equation.length; i++) {
            const char = equation.charAt(i);
            console.log(`Character at index ${i}: ${char}`);
        }
    }
}

//ADDING OBJECTS
let mTricks = new multiplicationTricks;
let memTricks = new memorize;
let examples = new exampleVisuals;

// WEBPAGE FUNCTIONALITY
const display = document.getElementById("display");
const exampleDisplay = document.getElementById("exampleDisplay");
let answerDisplay = document.getElementById("answer");
let check = document.getElementById("check");


function clearDisplay(){
    display.value = "";
}
function generateProblem(inputProblem){
    display.value = inputProblem;

    answerDisplay.value = ""; 
    answerDisplay.style.borderColor = "";
}
function generateExample(inputProblem){
    exampleDisplay.value = inputProblem;
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
