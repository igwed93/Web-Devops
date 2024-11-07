document.getElementById("startQuiz").addEventListener("click", function() {
    alert("Quiz Started!");
});

let score = 0;

//array that holds questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "What color is the sky on a clear day?",
        options: ["Blue", "Green", "Red"],
        answer: "Blue"
    }
];



let timer;
const timeLimit = 15; // seconds
let timeRemaining = timeLimit;


//present questions dynamically
let currentQuestionIndex = 0;

//calculates user progress
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function showQuestion() {
    resetTimer(); //reset timer for each new question
    updateProgressBar(); // Update progress bar

    const questionContainer = document.getElementById("questionContainer");
    const questionObj = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
    <h2>Question ${currentQuestionIndex + 1} of ${questions.length}</h2>
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


//checkin for correct answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer == correctAnswer) {
            score++; //Increase score for a correct answer
            alert("Correct!");
        } else {
            alert("Incorrect. The correct answer was: " + correctAnswer);
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion(); //show the next question
        } else {
            showResults(); //show final score
        }
    } else {
        alert("Please select an option.");
    }

}


//displays the result at the end of the quiz
function showResults() {
    const questionContainer = document.getElementById("questionContainer");

    questionContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score is: ${score} out of ${questions.length}</p>
        <button onclick="restartQuiz()">Retake Quiz</button>
    `;
}

//restarts the quiz
function restartQuiz() {
    score = 0;      //Reset score
    currentQuestionIndex = 0;   //Reset question index
    shuffleQuestions(); // Shuffle questions on each restart
    showQuestion();     //show the first question again.
}


//starts timer
function startTimer() {
    timeRemaining = timeLimit;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = `Time Left: ${timeRemaining}s`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timer);
            alert("Time is up!");
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }
    }, 1000);
}

//reets timer
function resetTimer() {
    clearInterval(timer);
    startTimer();
}

//shuffles questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}


window.onload = function() {
    shuffleQuestions(); //shuffles questions
    showQuestion(); //displays the question once window loads
};