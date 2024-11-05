const quotes = [
    "voooooooooohhh.",
    "ಕಾಡಲ್ಲಿ ಒಂದು ಸೊಪ್ಪು ಸಿಗ್ತದೆ .",
    "ಇದು ಬೆಳಕಲ್ಲ ದರ್ಶನ.",
    
];

document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
});

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

let quizQuestions = [
    { question: "Is movie released in 2022", answer: true },
    { question: "Is rishab shetty is only an actor", answer: false }
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = quizQuestions[currentQuestionIndex].question;
}

function checkAnswer(userAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    displayQuestion();
}
