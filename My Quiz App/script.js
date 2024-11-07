// Event listener for starting the quiz based on selected category
document.getElementById("startQuiz").addEventListener("click", function() {
    const selectedCategory = document.getElementById("categorySelect").value;
    
    if (selectedCategory) {
        alert(`Quiz Started with ${selectedCategory} category!`);
        initializeQuiz(selectedCategory);
    } else {
        alert("Please select a category to start the quiz.");
    }
});

// Array that holds questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        answer: "Paris",
        feedback: "Paris is the capital and most populous city of France.",
        category: "Geography",
        points: 10
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4",
        feedback: "2 + 2 equals 4, which is basic arithmetic.",
        category: "Maths",
        points: 5
    },
    {
        question: "What color is the sky on a clear day?",
        options: ["Blue", "Green", "Red"],
        answer: "Blue",
        feedback: "The sky is usually blue.",
        category: "General knowledge",
        points: 20
    }
];

let filteredQuestions = []; // Holds questions filtered by category
let score = 0;
let total_points = 0; 
let currentQuestionIndex = 0;
let timer;
const timeLimit = 15; // seconds

// Display category options
function displayCategories() {
    const categories = [...new Set(questions.map(q => q.category))];
    const categorySelect = document.getElementById("categorySelect");

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Initialize the quiz with a selected category
function initializeQuiz(category) {
    filteredQuestions = filterQuestionsByCategory(category); // Filter questions based on category

    //Reset Quiz Variables for new category
    total_points = filteredQuestions.reduce((acc, question) => acc + question.points, 0); // Calculate total points
    currentQuestionIndex = 0; 
    score = 0;
    shuffleQuestions(filteredQuestions); // Shuffle filtered questions
    
    showQuestion(); // Start quiz with the first question
}

// Filter questions based on category
function filterQuestionsByCategory(category) {
    return questions.filter(question => question.category === category);
}

// Show questions dynamically
function showQuestion() {
    resetTimer(); // Reset timer for each new question
    updateProgressBar(); // Update progress bar

    const questionContainer = document.getElementById("questionContainer");
    const questionObj = filteredQuestions[currentQuestionIndex];

    questionContainer.innerHTML = `
    <h2>Question ${currentQuestionIndex + 1} of ${filteredQuestions.length}</h2>
    <p>Score: ${score}</p>
    <p id="timer">Time Left: ${timeLimit}s</p>
    <h3>${questionObj.question}</h3>
        ${questionObj.options.map((option, index) => `
            <label>
                <input type="radio" name="option" value="${option}">
                ${option}
            </label><br>
        `).join('')}
        <button onclick="checkAnswer()">Submit Answer</button>
    `;
}

// Checking the answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const questionObj = filteredQuestions[currentQuestionIndex];

        if (userAnswer === questionObj.answer) {
            score += questionObj.points; // Increase score for a correct answer
            alert("Correct! " + questionObj.feedback + " You earned " + questionObj.points + " points.");
        } else {
            alert("Incorrect. " + questionObj.feedback);
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < filteredQuestions.length) {
            showQuestion(); // Show the next question
        } else {
            showResults(); // Show final score
        }
    } else {
        alert("Please select an option.");
    }
}

// Display results at the end of the quiz
function showResults() {
    const questionContainer = document.getElementById("questionContainer");

    questionContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score is: ${score} out of ${total_points}</p>
        <button onclick="restartQuiz()">Retake Quiz</button>
    `;
}

// Restart the quiz
function restartQuiz() {
    const selectedCategory = document.getElementById("categorySelect").value;
    if (selectedCategory) {
        initializeQuiz(selectedCategory); // Restart with the selected category
    }
}

// Calculate progress
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const progressPercentage = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Timer functions
function startTimer() {
    timeRemaining = timeLimit;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = `Time Left: ${timeRemaining}s`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timer);
            alert("Time is up!");
            currentQuestionIndex++;
            if (currentQuestionIndex < filteredQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Shuffle questions
function shuffleQuestions(questionsArray) {
    for (let i = questionsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsArray[i], questionsArray[j]] = [questionsArray[j], questionsArray[i]];
    }
}

// Initialize on window load
window.onload = function() {
    displayCategories(); // Display category options on load
};
