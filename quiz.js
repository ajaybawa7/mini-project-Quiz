let quizData = [
    {
        question: "What is the result of 7 + 4?",
        options: ["14", "11", "10", "7"],
        answer: 1 
    },
    {
        question: "What is the result of 2-2?",
        options: ["4", "1", "0", "-2"],
        answer: 2 
    },
    {
        question: "What is the result of 2*2?",
        options: ["4", "1", "0", "-2"],
        answer: 0 
    },
    {
        question: "What is the result of 2/2?",
        options: ["4", "1", "0", "-2"],
        answer: 1 
    },

    {
        question: "What is the result of '5' + 5?",
        options: ["10", "55", "5","None of the above"],
        answer: 1 
    },
    {
        question: "What is the result of 1++;",
        options: ["2", "3", "0", "10"],
        answer: 0 
    },
    {
        question: "What will be the value of y after: let y = 5; y--;",
        options: ["4", "5", "6", "None of the above"],
        answer: 0 
    },
    {
        question: "What is the type of undefined?",
        options: ["'string'", "'object'", "'undefined'", "'boolean'"],
        answer: 2 
    },
    {
        question: "What is the result of true == 1?",
        options: ["true", "false", "NaN", "undefined"],
        answer: 0 
    },
    {
        question: "What is the value of a after: let a = 2; a *= 3;",
        options: ["5", "6", "8", "3"],
        answer: 1 
    },
    {
        question: "What is the result of '5' === 5?",
        options: ["true", "false", "NaN", "error"],
        answer: 1 
    },
    {
        question: "What is the type of an object {}?",
        options: ["'array'", "'object'", "'null'", "'undefined'"],
        answer: 1 
    }
];

quizData.push({
    question: "What is the result of 2 + '2'?",
    options: ["'22'", "4", "NaN", "error"],
    answer: 0 
});

quizData.pop();

quizData.splice(3, 0, {
    question: "What will be the value of b after: let b = 7; b += 2;",
    options: ["9", "7", "2", "undefined"],
    answer: 0 
});

let questionTexts = quizData.map(q => q.question);

let typeQuestions = quizData.filter(q => q.question.includes('type'));

let totalPoints = quizData.reduce((sum, q) => sum + 1, 0);

let currentQuestionIndex = 0;
let score = 0;

const newQuestionAudio = document.getElementById("new-question-audio");
        const correctAnswerAudio = document.getElementById("correct-answer-audio");
        const wrongAnswerAudio = document.getElementById("wrong-answer-audio");

function loadQuestion() {
    let currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("btn0").textContent = currentQuestion.options[0];
    document.getElementById("btn1").textContent = currentQuestion.options[1];
    document.getElementById("btn2").textContent = currentQuestion.options[2];
    document.getElementById("btn3").textContent = currentQuestion.options[3];
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
    newQuestionAudio.play();
}

function checkAnswer(selectedOptionIndex) {
    let currentQuestion = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answer) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
        correctAnswerAudio.play()
    } else {
        document.getElementById("feedback").textContent = "Wrong! The correct answer is " + currentQuestion.options[currentQuestion.answer];
        wrongAnswerAudio.play();
    }
    document.getElementById("next-btn").style.display = "block";
    
}

function nextQuestion() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById("quiz-container").innerHTML = "<h2>Your final score is " + score + " out of " + totalPoints + "</h2>";
}

loadQuestion();
