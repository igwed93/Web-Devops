//  Declare variables for the program.
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');


// regex to match valid number inputs
// matches all numbers with or without the country code "1", with or without parentheses
// around the area code, with or without hyphens, and with or without spaces between digits. 

const numFormat = /(?:^|\s)(?:(?:1\s?)?(?=\(\d{3}\)|\d{3})[\s|-]?\d{3}[\s|-]?\d{4})(?:\s|$)/;


// tests the user input with the regeular expression
const isTelNumber = (telNum) => numFormat.test(telNum);


// validates the number provided by the user
function validateNumber(event) {
    let output = "";
    const num = userInput.value;

    //ensures user enters a number
    if (num === "") {
        alert("Please provide a phone number");
        return;
    }


    if (isTelNumber(num)) {
        output = "Valid US Number: " + num;
    } else {
        output = "Invalid US Number: " + num;
    }
    result.textContent = output;
    result.classList.remove('hide-result');
}

function handleKeyDown(event) {
    let keyCode = event.keyCode;

    if (keyCode === 13) {
        validateNumber();
    }
}

checkBtn.addEventListener('click', validateNumber);
document.onkeydown = handleKeyDown;

clearBtn.addEventListener('click', () => {
    userInput.value = "";
    result.textContent = "";
    result.classList.add('hide-result');
});