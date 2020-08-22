var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)
answerButtonsEl.addEventListener('click', () => {
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questions);
}

function showQuestion() {
    questionEl.innerText = questions[0].question;

    questions[0].answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
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

function selectAnswer() {

    let ans = 0;

    for(var i = 0; i < answers.length; i++)
{
    var answer = confirm(question[0].answers)

    if (answer === question[0].answer) {
        alert("nice!");
        ans++;
    }
    else{
        alert("nope!");
    }
}
    // var selectedButton = e.target
    // var correct = selectedButton.dataset.correct
    // // setStatusClass(document.body, correct)
    // Array.from(answerButtonsEl.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })
}

// function setStatusClass(el, correct) {
//     clearStatusClass(el)
//     if(correct) {
//         el.classList.add('correct')
//     }
//     else {
//         el.classList.add('incorrect')
//     }
// }

// function clearStatusClass(el) {
//     el.classList.remove('correct')
//     el.classList.remove('incorrect')
// }

var questions = [
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