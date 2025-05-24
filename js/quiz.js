// Quiz data
const quizData = [
    {
        question: "Which of the following is the biggest source of ocean plastic pollution?",
        options: [
            "A) Fishing nets",
            "B) Plastic bags",
            "C) Plastic bottles",
            "D) Microplastics from clothing"
        ],
        answer: "B",
        explanation: "While all options contribute, plastic bags are among the most common items found in ocean cleanups and are extremely harmful to marine animals who often mistake them for food."
    },
    {
        question: "What percentage of the Earth’s surface is covered by oceans?",
        options: [
            "A) 50%",
            "B) 60%",
            "C) 70%",
            "D) 80%"
        ],
        answer: "C",
        explanation: "Oceans cover around 71% of the Earth's surface, making them the planet’s largest ecosystem."
    },
    {
        question: "Which of these marine animals is critically endangered?",
        options: [
            "A) Clownfish",
            "B) Blue Whale",
            "C) Hawksbill Sea Turtle",
            "D) Great White Shark"
        ],
        answer: "C",
        explanation: "Hawksbill turtles are critically endangered due to illegal shell trade, habitat loss, and plastic pollution."
    },
    {
        question: "What is coral bleaching primarily caused by?",
        options: [
            "A) Overfishing",
            "B) Plastic pollution",
            "C) Rising ocean temperatures",
            "D) Noise pollution"
        ],
        answer: "C",
        explanation: "Climate change leads to warmer oceans, which causes corals to expel the algae they depend on, turning white — a phenomenon called coral bleaching."
    },
    {
        question: "By what year could there be more plastic than fish in the ocean (by weight), if no action is taken?",
        options: [
            "A) 2040",
            "B) 2050",
            "C) 2070",
            "D) 2100"
        ],
        answer: "B",
        explanation: "According to a report by the Ellen MacArthur Foundation, by 2050, plastic could outweigh fish in the ocean if current trends continue."
    }
];

let currentQuestion = 0;
let userAnswers = [];


function showQuestion(index) {
    document.getElementById('quiz-intro').style.display = 'none';
    const form = document.getElementById('quiz-form');
    form.style.display = '';
    form.innerHTML = '';
    const q = quizData[index];
    const section = document.createElement('section');
    section.className = 'quiz-question';
    const h2 = document.createElement('h2');
    h2.textContent = `Question ${index + 1}: ${q.question}`;
    section.appendChild(h2);
    q.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="q${index}" value="${String.fromCharCode(65 + i)}"> ${opt}`;
        section.appendChild(label);
        section.appendChild(document.createElement('br'));
    });
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.textContent = (index === quizData.length - 1) ? 'Finish Quiz' : 'Next';
    nextBtn.onclick = function() {
        const selected = form.querySelector(`input[name="q${index}"]:checked`);
        if (!selected) {
            alert('Please select an answer.');
            return;
        }
        userAnswers[index] = selected.value;
        if (index < quizData.length - 1) {
            showQuestion(index + 1);
        } else {
            showResults();
        }
    };
    section.appendChild(nextBtn);
    form.appendChild(section);
}

function showResults() {
    document.getElementById('quiz-form').style.display = 'none';
    let score = 0;
    let resultHtml = '<h2>Your Results</h2>';
    quizData.forEach((q, i) => {
        const correct = userAnswers[i] === q.answer;
        if (correct) score++;
        resultHtml += `<div class="quiz-result-block"><strong>Q${i+1}:</strong> ${q.question}<br>`;
        resultHtml += `Your answer: <b>${userAnswers[i] || 'No answer'}</b> - <span style="color:${correct ? 'green' : 'red'};font-weight:bold;">${correct ? 'Correct' : 'Incorrect'}</span><br>`;
        resultHtml += `<em>${q.explanation}</em></div><br>`;
    });
    resultHtml += `<h3>Score: ${score} / ${quizData.length}</h3>`;
    document.getElementById('quiz-result').innerHTML = resultHtml;
}