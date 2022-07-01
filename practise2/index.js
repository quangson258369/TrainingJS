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
                <input type="radio" name="question${questionNumber}" value="${letter}">
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
buildQuiz();
const slides = document.querySelectorAll(".slide");

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';

    }
}
let currentSlide = 0;
showSlide(currentSlide);

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}



previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);