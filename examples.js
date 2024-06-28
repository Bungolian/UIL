let steps = [];

let ones;
let tens;
let hundreds;

let oneD;
let tenD;
let hundredD;
let Carry = false;

class e2by11{   // abMMMyy . 01 * 56
constructor(steps){
    this.steps = new Array(4); // doesnt really do anthing.
}

    initialize(){ 
        nextStep.addEventListener("click", event => {
            this.addStep();
        });
    }
        
    readChar(equation) { 
    char = []; 
    for (let i = 0; i < equation.length; i++) {
        char.push (equation.charAt(i));
    }
    ones = char[1];
    tens = char[0];
}
    addStep(){
        steps.push("step");
        if (steps.length >= 4){
            steps.length = 1;
        }

        switch (steps.length){
            case 1:
                console.log("case 1");
                this.step1(equation);
                nextStep.textContent = "Show Step 2";
            break;
            case 2:
                console.log("case 2 ");
                this.step2();
                nextStep.textContent = "Show Step 3";
            break;
            case 3: // last step
                console.log("case 3 ");
                this.step3();
                nextStep.textContent = "Show Step 1";
            break;    
        }
    }

    step1(equation){
        this.readChar(equation);
        oneD = ones;
        stepDisplay.value = oneD;
        explainDisplay.textContent = "Ones digit remains the same.";
    }
    step2(){
        //stepDisplay.value = tens + ones;// adding like a string not a mathmatical equation
        tenD = Number(ones) + Number(tens);

        if (tenD >= 10){
            Carry = true;
            tenD = `${tenD}`;
            tenD = tenD.charAt(1);
        }
        stepDisplay.value = tenD + oneD;
        explainDisplay.textContent = "Add the 10's and the 1's place. Take the 1's digit of the sum and make it the 10's digit of your answer. Make sure to carry 1 over to the 100's digit in the case your sum is more than 9";
    }
    step3(){
        hundredD = tens;
        if (Carry == true){hundredD = `${Number(tens) + 1}`;}
        stepDisplay.value = hundredD + tenD + oneD;
        explainDisplay.textContent = "The Hundreds Digit of the final answer remains the same as the tens digit. UNLESS the sum from previous step requires a carry.";
        Carry = false;
    }
}

//Objects 
let ex2by11 = new e2by11; 

function generateExample(inputProblem){
    exampleDisplay.value = inputProblem;

    nextStep.textContent = "Show Step 1";
    stepDisplay.value = "";
    steps.length = 0;
    
}


