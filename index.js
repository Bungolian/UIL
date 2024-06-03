
let x;
let y;
let answer;
let result;

class multiplicationTricks{

    foiling2x2(){
        x = Math.floor(Math.random() * 99);
        y = Math.floor(Math.random() * 99);
        let result = x * y;
        return console.log(`${x} * ${y} = ${result}`);
    }   

    trick2by11(){
        x = Math.floor(Math.random() * 99);
        y = 11;
        let result = x * y;
        return console.log(`${x} * 11 = ${result}`); 
    }

    
    trick3by11 (){
        x = Math.floor(Math.random() * 999);
        y = 11;
        let result = x * y;
        return console.log(`${x} * 11 = ${result}`); 
    }
}


let mTricks = new multiplicationTricks;

let document;
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function generateProblem(){
    display.value = "this is a new problem";
}


