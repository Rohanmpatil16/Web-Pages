// Append clicked button value to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Calculate and show the result
function calculateResult() {
    let expression = document.getElementById("display").value;

    try {
        // new Function creates a mini calculator safely
        let result = new Function("return " + expression)();

        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}


