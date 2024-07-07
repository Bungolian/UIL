let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let check2x11 = document.getElementById("2x11");
let check3x11 = document.getElementById("3x11");
let checkFoiling2x2 = document.getElementById("foiling2x2");

let button = document.getElementById("mess"); // temporary. To be replaced by the original generateProblem Button.


let equations = new Array;
let randomEquation;

function initialize(){ // dont think I need this???
    //checkboxes.forEach(checkboxes => checkboxes.addEventListener("click", event => {console.log(check2x11.checked);}));
}

function submit(){ // dont know how to change these ugly if statments into a swtich case...
    console.log("Button pressed");

    if (check2x11.checked == true){ 
        mTricks.trick2by11();
        console.log(equation);
        equations.push(equation);  
    }
    if (check3x11.checked == true){
        mTricks.trick3by11();
        console.log(equation);
        equations.push(equation);
    }
    if (checkFoiling2x2.checked == true){
        mTricks.foiling2x2();
        console.log(equation);
        equations.push(equation);
    }
    randomEquation = equations[Math.floor(Math.random() * equations.length)];

    console.log(`Final Equation is ${equation}`);
    console.log(equations);
    console.log(randomEquation);

    equations.length = 0; // reset the array
}
    
