var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(question);
}

function showQuestion(question) {
    questionEl.innerText = question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function selectAnswer() {

}

var questions = [
    {
        question: 'Commonly used data types DO Not include:',
        answers: [
            {text: 'A. Strings', correct: false},
            {text: 'B. Booleans', correct: false},
            {text: 'C. Alerts', correct: true},
            {text: 'D. Numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed with ________.',
        answers: [
            {text: 'A. Quotes', correct: false},
            {text: 'B. Curly brackets', correct: true},
            {text: 'C. Parenthesis', correct: false},
            {text: 'D. Square brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: [
            {text: 'A. Numbers and strings', correct: false},
            {text: 'B. Other arrays', correct: false},
            {text: 'C. Booleans', correct: false},
            {text: 'D. All of the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        answers: [
            {text: 'A. Commas', correct: false},
            {text: 'B. Curly brackets', correct: false},
            {text: 'C. Quotes', correct: true},
            {text: 'D. Parenthesis', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'A. JavaScript', correct: false},
            {text: 'B. terminal/bash', correct: false},
            {text: 'C. For loops', correct: false},
            {text: 'D. Console.log', correct: true}
        ]
    }
]