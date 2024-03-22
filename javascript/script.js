
const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    
}

function calculate() {
    // important lines eval function calculates values 
    try {
        display.value = eval(display.value);
        
    } catch (error) {
        display.value  = "Error Please Input Correct";
        // error.style.Color = "red"
    }
    
}
// console.log("hii")