let x;
let y;
let answer;
let result;

class multiplicationTricks{
    /*  Mess with constructor later, not now. 
    constructor(x,y,answer, result){
        this.x = x;
        this.y = y;
        this.answer = answer;
        this.result = result;
    }
    */
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
mTricks.trick2by11();
/*
function foiling2x2(){
    x = Math.floor(Math.random() * 99);
    y = Math.floor(Math.random() * 99);
    let result = x * y;
    console.log(`${x} * ${y} = ${result}`);
}   
foiling2x2();

function trick2by11 (){
    x = Math.floor(Math.random() * 99);
    y = 11;
    let result = x * y;
    return result; 
}

console.log("The correct Answer is " + trick2by11());

function trick3by11 (){
    x = Math.floor(Math.random() * 999);
    y = 11;
    let result = x * y;
    return result; 
}

console.log("The correct Answer is " + trick3by11());

//module.exports = {trick2by11};
//export trick2by11;
*/