console.log ("Second Java file working"); // can pass parameters and variables between javascript files but not the actual funcitons. HTML acts as a middle man.



class e2by11{   // abMMMyy . 01 * 56

    readChar(equation) { 
        char = []; 
        for (let i = 0; i < equation.length; i++) {
            char.push (equation.charAt(i));
        }
    }

    step1(){
        stepDisplay.value = char[1];
        explainDisplay.textContent = "Ones digit remains the same.";
    }
    step2(){
        stepDisplay.value = "Step Two";
        explainDisplay.textContent = "Step Two";
    }
    step3(){
        stepDisplay.value = "Step Three";
        explainDisplay.textContent = "Step Three";
    }
    explain(equation){
        this.readChar(equation)
        console.log(char); 
        // -ROADBLOCK-
        if (nextStep.textContent == "Show Step 1"){
            nextStep.addEventListener("click", event =>{
                this.step1();
                nextStep.textContent = "Show Step 2";
            })
            
        }

        
    }
}

//Objects 
let ex2by11 = new e2by11; 

function generateExample(inputProblem){
    exampleDisplay.value = inputProblem;
}





