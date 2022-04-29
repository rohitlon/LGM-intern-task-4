//* this is for the automatic number input, remvoing "enter valid digit" message without removing it manually
let wrong = false;

//* creating append function

function setValue(value) {
    if (wrong === false) {
        document.querySelector("#inp").value += value;
    } else {
        document.querySelector("#inp").value = value;
        document.getElementById("inp").style.letterSpacing = "2px";
        wrong = false;
    }
}

function allClear() {
    document.querySelector("#inp").value = "";
}

function calculate() {
    try {
        let val = document.querySelector("#inp").value;
        let preAns = eval(val);
        // let preAns = "hello guys";
        document.querySelector("#inp").value = preAns;
        if (preAns == undefined) {
            document.getElementById("inp").style.letterSpacing = "0px";
            document.querySelector("#inp").value = "Enter valid digit";

            wrong = true;
        }
    } catch (error) {
        alert("Invalid Syntax");
        document.querySelector("#inp").value = "";
    }
}
function root() {
    let val = document.querySelector("#inp").value;
    document.querySelector("#inp").value = Math.pow(val, 0.5);
}
function percent() {
    let val = document.querySelector("#inp").value;
    document.querySelector("#inp").value = val / 100;
}

function backspace() {
    let val = document.querySelector("#inp").value;
    document.querySelector("#inp").value = val.slice(0, val.length - 1);
}