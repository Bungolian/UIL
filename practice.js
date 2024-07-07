let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let check2x11 = document.getElementById("2x11");
let check3x11 = document.getElementById("3x11");
let checkFoiling2x2 = document.getElementById("foiling2x2");

let equations = new Array;
let randomEquation;


function submit(){ // dont know how to change these ugly if statments into a swtich case...
    console.log("Button pressed");

    if (check2x11.checked == true){ 
        // mTricks.trick2by11();
        // equations.push(equation);
        generateProblem(mTricks.trick2by11()); // will only display the first if statement read when reading this page.
    }
    if (check3x11.checked == true){
        mTricks.trick3by11();
        equations.push(equation);
    }
    if (checkFoiling2x2.checked == true){
        mTricks.foiling2x2();
        equations.push(equation);
 
    }
   // randomEquation = equations[Math.floor(Math.random() * equations.length)];
}
    function generateProblem2(){
        submit()
        console.log(equations);
        console.log(randomEquation);

        display.value = randomEquation;

        answerDisplay.value = ""; 
        answerDisplay.style.borderColor = "";
        equations.length = 0; // reset the array
    }
