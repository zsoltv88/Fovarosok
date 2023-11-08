
const orszagok = {
    "Magyarország": "Budapest",
    "Németország": "Berlin",
    "Ausztria": "Bécs",
    "Csehország": "Prága",
    "Spanyolország": "Madrid",
    "Olaszország": "Róma",
    "Svédország": "Stockholm",
    "Finnország": "Helsinki",
    "Franciaország": "Párizs",
    "Egyesült Királyság": "London"
};

const questionElement = document.getElementById("kerdes");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("ellenoriz");
const resultElement = document.getElementById("valasz");
const scoreElement = document.getElementById("eredmeny");

let currentCountry, correctAnswer, score = 0, totalQuestions = 0;

function getRandomCountry() {
    const countryKeys = Object.keys(orszagok);
    const randomIndex = Math.floor(Math.random() * countryKeys.length);
    return countryKeys[randomIndex];
}

function displayQuestion() {
    currentCountry = getRandomCountry();
    correctAnswer = orszagok[currentCountry];

    questionElement.textContent = `Mi a(z) ${currentCountry} fővárosa?`;
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === correctAnswer.toLowerCase()) {
    resultElement.textContent = "Helyes!";
    score++;
    } else {
    resultElement.textContent = `Nem jó! A helyes válasz: ${correctAnswer}`;
    }

    totalQuestions++;
    scoreElement.textContent = `${score}/${totalQuestions}`;

    answerInput.value = "";
    displayQuestion();
}

displayQuestion();

checkButton.addEventListener("click", checkAnswer);

answerInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
    checkAnswer();
    }
});
