let CORRECT = 0;
var currentQuestionIndex = 0; //Globally scoped question counter

const QUESTIONS = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'A. Strings', correct: false },
            { text: 'B. Booleans', correct: false },
            { text: 'C. Alerts', correct: true },
            { text: 'D. Numbers', correct: false }
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed with ________.',
        answers: [
            { text: 'A. Quotes', correct: false },
            { text: 'B. Curly brackets', correct: true },
            { text: 'C. Parenthesis', correct: false },
            { text: 'D. Square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: [
            { text: 'A. Numbers and strings', correct: false },
            { text: 'B. Other arrays', correct: false },
            { text: 'C. Booleans', correct: false },
            { text: 'D. All of the above', correct: true }
        ]
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        answers: [
            { text: 'A. Commas', correct: false },
            { text: 'B. Curly brackets', correct: false },
            { text: 'C. Quotes', correct: true },
            { text: 'D. Parenthesis', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'A. JavaScript', correct: false },
            { text: 'B. terminal/bash', correct: false },
            { text: 'C. For loops', correct: false },
            { text: 'D. Console.log', correct: true }
        ]
    }
]

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')
var welcomeMsg = document.getElementById("start-page")
var timer = 75
var mytimer = document.getElementById("my-timer")
mytimer.innerText = timer

var countdown = function () {

    var timeInterval = setInterval(function () {

        timer > 0 || currentQuestionIndex < 4 ? timer -= 1 : clearInterval(timeInterval);

    }, 1000);
};

var countdowndisplay = function () { setInterval(function () { mytimer.innerText = timer; }, 1000); }

startButton.addEventListener('click', startQuiz)
answerButtonsEl.addEventListener('click', () => {
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    welcomeMsg.classList.add('hide')
    setNextQuestion()
    countdown()
    countdowndisplay()
}

function setNextQuestion() {
    resetState()
    //showQuestion(QUESTIONS);
    showQuestion(currentQuestionIndex);
}

function showQuestion(currentQuestionIndex) {
    if (currentQuestionIndex === 4) {
        endScore();
    }
    questionEl.innerText = QUESTIONS[currentQuestionIndex].question;
    QUESTIONS[currentQuestionIndex].answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
        button.value = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    //console.log(e.target.value);

    var answer = QUESTIONS[currentQuestionIndex].answers
    var check = answer.filter(obj => {
        return obj.text === e.target.value;
    });
    //console.log(check[0].correct);

    if (check[0].correct) {
        alert("Right");
        //correct++;
    }
    else {
        alert("Wrong");
        timer = timer - 5;
    }
    currentQuestionIndex++;

    showQuestion(currentQuestionIndex);


}

function endScore() {
    var initials = window.prompt("Your final score is " + timer + ". Please enter your initials to save.");
    localStorage.setItem("score", initials + " - " + timer);
    return false;
}