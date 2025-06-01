// Quiz data (from quiz.txt)
const quizData = [
    {
        question: "What percentage of Earth’s surface is covered by oceans?",
        options: [
            "A) About 50%",
            "B) About 60%",
            "C) Over 70%",
            "D) Over 90%"
        ],
        answer: "C",
        explanation: "Oceans cover over 70% of Earth's surface, making them the planet’s largest ecosystem."
    },
    {
        question: "Which critically endangered marine mammal lives only in the northern part of the Gulf of California and has fewer than 10 individuals remaining?",
        options: [
            "A) Southern sea otter",
            "B) Vaquita",
            "C) Blue whale",
            "D) Hawksbill turtle"
        ],
        answer: "B",
        explanation: "The vaquita is the world’s most endangered marine mammal, found only in the northern Gulf of California."
    },
    {
        question: "True or False: Oceans absorb about 90% of the excess heat caused by climate change.",
        options: [
            "A) True",
            "B) False"
        ],
        answer: "A",
        explanation: "Oceans absorb about 90% of the excess heat from climate change, helping to regulate the planet’s temperature."
    },
    {
        question: "What makes the scalloped hammerhead shark especially vulnerable to overfishing?",
        options: [
            "A) It travels alone",
            "B) Its fins are highly valued in the shark fin trade",
            "C) It is very slow",
            "D) It nests near the shore"
        ],
        answer: "B",
        explanation: "Scalloped hammerhead shark fins are highly valued in the shark fin trade, making them a frequent target for overfishing."
    },
    {
        question: "Which of the following is a major threat to hawksbill sea turtles?",
        options: [
            "A) Whale hunting",
            "B) Coral bleaching",
            "C) Illegal trade of their shell for jewelry",
            "D) Noise pollution"
        ],
        answer: "C",
        explanation: "Hawksbill turtles are critically endangered mainly due to the illegal trade of their beautiful shells for jewelry."
    },
    {
        question: "Which ocean issue occurs when ships, sonar, and industrial noise disturb whales and dolphins?",
        options: [
            "A) Thermal pollution",
            "B) Noise pollution",
            "C) Algae blooms",
            "D) Coral bleaching"
        ],
        answer: "B",
        explanation: "Noise pollution from ships and sonar can disturb and even harm whales and dolphins."
    },
    {
        question: "Which intelligent marine animal can reach a wingspan of 7 meters and is often caught accidentally in fishing nets?",
        options: [
            "A) Blue whale",
            "B) Scalloped hammerhead shark",
            "C) Giant manta ray",
            "D) Vaquita"
        ],
        answer: "C",
        explanation: "The giant manta ray can reach a wingspan of 7 meters and is often caught as bycatch in fishing nets."
    },
    {
        question: "How do sea otters, one of the few non-human animals to use tools, crack open shellfish?",
        options: [
            "A) With their teeth",
            "B) By slamming them on the seabed",
            "C) Using rocks",
            "D) With their tails"
        ],
        answer: "C",
        explanation: "Sea otters use rocks as tools to crack open shellfish on their bellies."
    },
    {
        question: "What role do oceans play in regulating Earth’s climate?",
        options: [
            "A) They cool down the poles",
            "B) They reflect sunlight",
            "C) They store CO₂ and absorb heat",
            "D) They create wind currents"
        ],
        answer: "C",
        explanation: "Oceans store carbon dioxide and absorb heat, playing a crucial role in regulating Earth’s climate."
    },
    {
        question: "Why is the collapse of coral reefs a global concern?",
        options: [
            "A) They only affect deep-sea animals",
            "B) They increase jellyfish populations",
            "C) Millions depend on them for food and tourism",
            "D) They only occur in the Atlantic Ocean"
        ],
        answer: "C",
        explanation: "Millions of people depend on coral reefs for food, tourism, and coastal protection, so their collapse is a global concern."
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