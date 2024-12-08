let display = document.getElementById('display');
let currentValue = '';

// Initialize the display with an empty value
display.value = '';

// Append value to the display
function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

// Clear the display
function clearDisplay() {
    currentValue = '';
    display.value = ''; // Reset the display to empty
}

// Calculate the result
function calculateResult() {
    try {
        currentValue = eval(currentValue).toString();
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
        currentValue = '';
    }
}

