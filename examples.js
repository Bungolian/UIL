let steps = [];

let ones;
let tens;
let hundreds;

let oneD;
let tenD;
let hundredD;

class e2by11{   // abMMMyy . 01 * 56
constructor(steps){
    this.steps = new Array(4); // doesnt really do anthing.
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
        if (steps.length >= 5){
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
            case 3:
                console.log("case 3 ");
                this.step3();
                nextStep.textContent = "Show Step 4";
            break;
            case 4:
                console.log("case 4 ");
                nextStep.textContent = "Show Step 5";
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
        stepDisplay.value = tens + ones;// adding like a string not a mathmatical equation
        explainDisplay.textContent = "Add the 10's and the 1's place. Take the 1's digit of the sum and make it the 10's digit of your answer. Make sure to carry 1 over to the 100's digit in the case your sum is more than 9";
    }
    step3(){
        stepDisplay.value = "Step Three";
        explainDisplay.textContent = "Step Three";
    }
}

//Objects 
let ex2by11 = new e2by11; 

function generateExample(inputProblem){
    exampleDisplay.value = inputProblem;
}

nextStep.addEventListener("click", event => {
    ex2by11.addStep();
    console.log(steps);
});


