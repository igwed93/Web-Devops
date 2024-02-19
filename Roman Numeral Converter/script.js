const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


function checkUserInput(e) {
    e.preventDefault();
    let input = parseInt(numberInput.value);
    if (!input || isNaN(input)) {
        output.textContent = "Please enter a valid number";
        output.classList.remove('hidden');
        return;
    } else if (input < 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.remove('hidden');
        return;
    } else if (input > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.classList.remove('hidden');
        return;
    }
    const romanNumeral = toRomanNumeral(input);
    output.textContent = romanNumeral;
    output.classList.remove('hidden');
    numberInput.value = "";
}


function toRomanNumeral(num) {
    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ones
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // tens
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
        ["", "M", "MM", "MMM", ] // thousands
    ];

    let romanNumeral = "";
    let digitIndex = 0;

    while (num > 0) {
        const digit = num % 10;
        romanNumeral = romanNumerals[digitIndex][digit] + romanNumeral;
        num = Math.floor(num / 10);
        digitIndex++;
    }

    return romanNumeral;
}



convertBtn.addEventListener('click', checkUserInput);
convertBtn.addEventListener('keydown', (e) => {
   if (e.key === "Enter") {
    checkUserInput();
   }
});