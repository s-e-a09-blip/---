const QUESTIONS = [
    {
        q: "Как вывести строку hello?",
        options: ['print("hello")', 'echo("hello")', 'console.log("hello")'],
        answer: 0
    },
    {
        q: "Какой тип у числа 5",
        options: ['str', 'int', 'float'],
        answer: 1
    }
];

const modal =  document.getElementById("quizModal");
const openBtn = document.getElementById("openQuizBtn");
const closeBtn = document.getElementById("closeQuizBtn");
const questionsContainer = document.getElementById("quizQuestions");
const checkBtn = document.getElementById("checkQuizBtn");
const resetBtn = document.getElementById("resetQuizBtn");
const resultBox = document.getElementById("quizResult");

function renderQuestions() {
    questionsContainer.innerHTML = '';
    QUESTIONS.forEach((item, idx) => {
        const block = document.createElement('div');
        block.className = 'quiz-question';
        block.innerHTML = `
        <p>${idx+1}. ${item.q}</p>
        ${item.options.map((opt, i) => `
            <label>
                <input type='radio' name='q${idx}' value='${i}'> ${opt}
            </label><br>`).join('')}
        `;
        questionsContainer.appendChild(block);
    });
}
function checkAnswers() {
    let correct = 0;
    QUESTIONS.forEach((q, idx) => {
        const chosen = document.querySelector(`input[name="q${idx}"]:checked`);
        if (chosen && Number(chosen.value) == q.answer) {
            correct++;
        }
    });
    resultBox.textContent = `Результат: ${correct} из ${QUESTIONS.length}`;
}
function resetQuiz(){
    document.getElementById("quizForm").reset();
    resultBox.textContent ='';
}
openBtn.onclick = () => {
    renderQuestions();
    modal.classList.add('show');
};

closeBtn.onclick = () => {
    modal.classList.remove('show');
};

checkBtn.onclick = checkAnswers;

reset.onclick = resetQuiz;