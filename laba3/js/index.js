function riddleGame() {
    alert("Добро пожаловать в игру 'Угадай загадки'!");

    let correctAnswers = 0; 
    let wrongAnswers = 0;

    function isNumber(value) {
        return !isNaN(value) && value.trim() !== '';
    }

    function containsEnglishLetters(value) {
        return /[a-zA-Z]/.test(value);
    }

    const riddles = [
        { question: "Что всегда перед тобой, но не можешь увидеть?", answer: "будущее" },
        { question: "Что может летать без крыльев?", answer: "время" },
        { question: "Что не имеет начала и конца, но всегда в движении?", answer: "круг" },
        { question: "У кого есть глаза, но он не может видеть?", answer: "игла" },
        { question: "Чем больше ты берешь, тем больше оставляешь. Что это?", answer: "следы" },
        { question: "Без рук, без ног, а по лесу бегает?", answer: "петух" },
        { question: "Я расту, но не живу. Кто я?", answer: "камень" },
        { question: "Что не может быть использовано до того, как будет разорвано?", answer: "яйцо" },
        { question: "У меня нет ушей, но я слышу все. Что это?", answer: "радио" },
        { question: "Кто всегда с нами, но мы его не видим?", answer: "воздух" },
        { question: "У меня есть корни, но я не дерево. Что это?", answer: "слово" },
        { question: "Что растет, но никогда не спит?", answer: "трава" },
        { question: "Что везде, но невозможно увидеть?", answer: "воздух" },
        { question: "Я сижу, но не на стуле. Кто я?", answer: "кот" },
        { question: "Что может бежать, но не может ходить?", answer: "вода" }
    ];

    for (let i = 0; i < riddles.length; i++) {
        let answer;
        do {
            answer = prompt(`Загадка ${i + 1}: ${riddles[i].question}`);
            
            if (isNumber(answer)) {
                alert("Ответ не может быть числом! Пожалуйста, введите текст.");
            }
            else if (containsEnglishLetters(answer)) {
                alert("Ответ не может содержать английских слов! Пожалуйста, введите ответ на русском.");
            }
            else if (answer.trim() === "") {
                alert("Ответ не может быть пустым! Пожалуйста, введите правильный ответ.");
            }
        } while (isNumber(answer) || containsEnglishLetters(answer) || answer.trim() === "");

        if (answer.trim().toLowerCase() === riddles[i].answer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    }

    alert(`Игра завершена! Вы ответили правильно на ${correctAnswers} загадок, допустив ${wrongAnswers} ошибок.`);

    if (correctAnswers >= 10) {
        alert("Поздравляем, вы выиграли! Отлично справились!");
    } else {
        alert("Вы проиграли! Попробуйте снова!");
    }

    if (confirm("Хотите сыграть снова?")) {
        riddleGame();
    }
}
document.getElementById('startGameButton').addEventListener('click', riddleGame);