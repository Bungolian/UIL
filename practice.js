let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let check2x11 = document.getElementById("2x11");
let check3x11 = document.getElementById("3x11");
let checkFoiling2x2 = document.getElementById("foiling2x2");
let check25LV1 = document.getElementById("25LV1"); let check25LV2 = document.getElementById("25LV2"); let check25LV3 = document.getElementById("25LV3");

let headerDrop = document.getElementById("dropDown");

let tricks = new Array;
let randomTrick;

function submit(){ // dont know how to change these ugly if statments into a swtich case...
    if (check2x11.checked == true){ 
        tricks.push("mTricks.trick2by11()");
    } 
    if (check3x11.checked == true){
        tricks.push("mTricks.trick3by11()");
    }
    if (checkFoiling2x2.checked == true){
        tricks.push("mTricks.foiling2x2()");
    }
    if (check25LV1.checked == true){
        tricks.push("mTricks.trick25Lv1()");
    }
    if (check25LV2.checked == true){
        tricks.push("mTricks.trick25Lv2()");
    }
    if (check25LV3.checked == true){
        tricks.push("mTricks.trick25Lv3()");
    }
    randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
}
