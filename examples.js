let steps = [];

let ones;
let tens;
let hundreds;

let onesB;
let tensB;
let hundredsB;

let oneD;
let tenD;
let hundredD;

let carryD; // the digit we will display on carries
let carryAdd = 0; // the ammount that gets carried away into next function
let Carry = false;


function checkCarry(digit){ //only for 10 digits.
        Carry = true;
        carryD = `${digit}`.charAt(1);
        carryAdd = `${digit}`.charAt(0);
        return carryD , carryAdd;
}


function readChar(equation){// only works for 2x2 formulas's. In the future I wil simply create seprate readChars for more advanced formulas. Will most likely be in their own class if they arent currently shared by multiple tricks.
    char = []; 
    for (let i = 0; i < equation.length; i++) {
        char.push (equation.charAt(i));
    }
    ones = char[1];
    tens = char[0];
    onesB = char[6];
    tensB = char[5];
}
class e2by11{   // abIIIyy . 01 * 56
    initialize(){ 
        nextStep.addEventListener("click", event => {
            this.addStep();
        });
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
        readChar(equation);
        oneD = ones;
        stepDisplay.value = oneD;
        explainDisplay.textContent = "Step 1 - Ones digit remains the same.";
    }
    step2(){
        tenD = Number(ones) + Number(tens);

        if(tenD >= 10){
        checkCarry(tenD);
        tenD = carryD;
        }
        
        stepDisplay.value = tenD + oneD;
        explainDisplay.textContent = "Step 2 - Add the 10's and the 1's place. Take the 1's digit of the sum and make it the 10's digit of your answer. Make sure to carry 1 over to the 100's digit in the case your sum is more than 9";
    }
    step3(){
        hundredD = tens;
        if (Carry == true){hundredD = `${Number(tens) + Number(carryAdd)}`;}
        stepDisplay.value = hundredD + tenD + oneD;
        explainDisplay.textContent = "Step 3 - The Hundreds Digit of the final answer remains the same as the tens digit. UNLESS the sum from previous step requires a carry.";
        Carry = false;
    }
}
class eFoiling2x2{ // abIIIcd . 01 *  56
    initialize(){ 
        nextStep.addEventListener("click", event => {
            this.addStep();
        });
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
        readChar(equation);
        oneD = Number(ones) * Number(onesB);
        
        if(oneD >= 10){ // check for a carry
            checkCarry(oneD);
            oneD = carryD;
            //console.log(carryAdd);
        }

        stepDisplay.value = oneD;
        explainDisplay.textContent = "Step 1 - Multiply the ones digits of both variables. Keep the ones digit of that answer and Carry if needed.";
    }
    step2(){// ten,one * tenB,oneB
        tenD = Number(ones) * Number(tensB) + Number(tens) * Number(onesB);

        if (Carry == true){ // check for previous carry
            tenD = `${Number(tenD) + Number(carryAdd)}`;
            Carry = false;
            } 

        if(tenD >= 10){
            checkCarry(tenD);
            tenD = carryD;
        }
        stepDisplay.value = tenD + oneD;
        explainDisplay.textContent = "Step 2 - Take the sum of the outer digits multiplied together and the inner digits multiplied together. (Outer-Inner = (ad + bc)) Keep the ones digit of that answer and Carry / Add previous Carries if needed.";  
    }
    step3(){
        hundredD = Number(tens) * Number(tensB);
        if (Carry == true){ // check for previous carry
            hundredD = `${Number(hundredD) + Number(carryAdd)}`;
            Carry = false;
            }
        stepDisplay.value = hundredD + tenD + oneD;
        explainDisplay.textContent = "Step 3 - Multiply the tens digits of both variables. Add previous Carries if needed.";
    }
    
}
class e25{ // abIII25 . 01 *  56
    initialize(){ 
        nextStep.addEventListener("click", event => {
            this.addStep();
        });
    }
    addStep(){// not universal. Depends how much steps the trick needs
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
        readChar(equation);
        explainDisplay.textContent = "Step 1";
    }
    step2(){
        explainDisplay.textContent = "Step 2";  
    }
    step3(){
        explainDisplay.textContent = "Step 3";
    }
}
//Objects 
let ex2by11 = new e2by11; 
let exFoiling2x2 = new eFoiling2x2;
let ex25 = new e25;

function generateExample(inputProblem){
    exampleDisplay.value = inputProblem;

    nextStep.textContent = "Show Step 1";
    explainDisplay.textContent = "Explanation";
    stepDisplay.value = "";
    steps.length = 0;
    
}


