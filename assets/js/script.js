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
    showQuestion(question)
}

function showQuestion(question) {
    questionEl.innerText = question
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
    }
]