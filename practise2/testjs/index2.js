const myQuestions = [{
    question: 'Javascript is _________ language.',
    answers: {
        a: 'Programming',
        b: 'Application',
        c: 'None of These',
        d: 'Scripting'
    },
    multi: false,
    correctAnswer: 'd'
}, {
    question: 'Which of the following is a valid type of function javascript supports?',
    answers: {
        a: 'named function',
        b: 'anonymous function',
        c: 'both of the above',
        d: 'none of the above'
    },
    multi: false,
    correctAnswer: 'c'
}, {
    question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
    answers: {
        a: 'getIndex()',
        b: 'location()',
        c: 'indexOf()',
        d: 'getLocation()'
    },
    multi: false,
    correctAnswer: 'c'
}, {
    question: 'Which one of the following is valid data type of JavaScript',
    answers: {
        a: 'number',
        b: 'void',
        c: 'boolean',
        d: 'nothing'
    },
    multi: false,
    correctAnswer: 'c'
}];
const quizContainer = document.getElementById('quiz');
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}" id="quiz" onclick="saveData(this,${questionNumber})">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
                );
            }
            output.push(
                `<div class="slide">
      <div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>
    </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function saveData(radioData, questionnumber) {
    alert(`${radioData.value},${questionnumber}`)
}
buildQuiz();