let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let check2x11 = document.getElementById("2x11");
let check3x11 = document.getElementById("3x11");
let checkFoiling2x2 = document.getElementById("foiling2x2");

let tricks = new Array;
let randomTrick;
let latestResult;

let equations = new Array; // should not use this array
let randomEquation;


function submit(){ // dont know how to change these ugly if statments into a swtich case...
    console.log("Button pressed");

    if (check2x11.checked == true){ 
        tricks.push("mTricks.trick2by11()");
    }
    if (check3x11.checked == true){
        tricks.push("mTricks.trick3by11()");
    }
    if (checkFoiling2x2.checked == true){
        tricks.push("mTricks.foiling2x2()");
    }
    randomTrick = tricks[Math.floor(Math.random() * tricks.length)]; // I can turn Math.Random into a variable and create an result array that will allign with the corresponding trick.
}
