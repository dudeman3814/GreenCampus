// Stores quiz data globally so it can be used across functions rather than fetching everytime
let quizData = [];

function fetchQuiz() {
    return fetch('../assets/data/quiz.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.quiz);
}

function drawQuiz(quiz) {
    const container = document.getElementById('quiz-container');

    // Loops through each question and creates the HTML
    quiz.forEach((question, index) => {
        const div = document.createElement('div');
        div.classList.add('question');

        // Defines the HTML structure for each question
        div.innerHTML = `
            <p class="quiz-question">True or False? ${question.question}</p>
            <span class="quiz-options">
            <label>
                <input class="quiz-answer-true" type="radio" name="q${index}" value="true"> True
            </label>
            <label>
                <input class="quiz-answer-false" type="radio" name="q${index}" value="false"> False
            </label>
            </span>
        `;

        // Adds the question to the container
        container.appendChild(div);
    });
}

// Checks the user's answers and calculates the score
function checkAnswers(quiz) {
    let score = 0;

    // Loops through each question
    for (let i = 0; i < quiz.length; i++) {

        const selected = document.querySelector(`input[name="q${i}"]:checked`);

        if (!selected) {
            document.getElementById('result').textContent =
                "Please answer all questions!";
            return;
        }

        const userAnswer = selected.value === "true";

        // Compares the user's answer to the correct answer
        if (userAnswer === quiz[i].answer) {
            score++;
        }
    }

    // Displays the final score on the page
    document.getElementById('result').textContent =
        `You got ${score} out of ${quiz.length}`;
}

function init() {
    fetchQuiz()
        .then(data => {
            quizData = data;
            drawQuiz(quizData);
        })
        .catch(error => {
            console.error('Failed to fetch quiz:', error);
        });

    document.getElementById('submit-answers').addEventListener('click', () => {
        checkAnswers(quizData);
    });
}

init();