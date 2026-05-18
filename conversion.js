// Swap Function

let isCelsiusToFahrenheit = true;

function swapUnits(){
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

    const box1 = document.getElementById("textBox1");
    const box2 = document.getElementById("textBox2");

    let tempValue = box1.value;

    box1.value = box2.value;
    box2.value = tempValue;

    if(isCelsiusToFahrenheit){
        box1.placeholder = "Celsius";
        box2.placeholder = "Fahrenheit";

    }else {
        box1.placeholder = "Fahrenheit";
        box2.placeholder = "Celsius";
    }
    document.getElementById("result").textContent = "";
}

// Temperature Conversion Logic 
function convert() {
    // Select elements with matching exact IDs from your HTML
    const box1 = document.getElementById("textBox1");
    const box2 = document.getElementById("textBox2");
    const resultElement = document.getElementById("result");

    // Convert input string to a real math number
    let inputValue = parseFloat(box1.value);

    // Validation: stop the function if the user didn't enter a number
    if (isNaN(inputValue)) {
        if (resultElement) resultElement.textContent = "Please enter a valid number!";
        return;
    }

    let temp;

    // Check which math formula to apply
    if (isCelsiusToFahrenheit) {
        // Mode: Celsius -> Fahrenheit 
        temp = (inputValue * 9/5) + 32;
        box2.value = temp.toFixed(1); // Set value in the "To" box
        if (resultElement) {
            resultElement.textContent = ` ${temp.toFixed(1)}°F`;
        }
    } else {
        // Mode: Fahrenheit -> Celsius
        temp = (inputValue - 32) * 5/9;
        box2.value = temp.toFixed(1); // Set value in the "To" box
        if (resultElement) {
            resultElement.textContent = `${temp.toFixed(1)}°C`;
        }
    }
}

// 3. Clear Functionality
function clearForm() {
    document.getElementById("textBox1").value = "";
    document.getElementById("textBox2").value = "";
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.textContent = "";
    }
}