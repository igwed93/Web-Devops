const checkButton = document.getElementById('check-btn');


function displayResult(res) {
    if (res === "Invalid input") {
        console.log("It's not working as expected");
        return;
    }
    const HTMLString = `<p>${res}</p>`;
    const checkerResult = document.getElementById('result');
    checkerResult.innerHTML = HTMLString;
    checkerResult.classList.remove('hide');
}


function isPalindrome(event) {
    event.preventDefault();

    const userInput = document.getElementById('text-input').value.trim();
    if (!userInput) {
        alert('Please input a value');
        return;
    }

    const cleanInput = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();;
    if (!cleanInput || cleanInput.length === 0) {
        result = "Invalid input";
        displayResult(result);
        return;
    }

    const reversedInput = cleanInput.split('').reverse().join('');
    
    let result = (cleanInput === reversedInput)
        ? `${userInput} is a palindrome` : `${userInput} is not a palindrome`;
    
    displayResult(result);
    document.getElementById('text-input').value = '';
    return false;
}


document.getElementById('form').addEventListener('submit', function (e) {
    isPalindrome(e);
});
checkButton.addEventListener('click', isPalindrome);