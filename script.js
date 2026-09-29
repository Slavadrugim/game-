const game = {
    secretNumber: 7,
    attempts: 0,

    startGame: function() {
        this.attempts = 0;
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
    },

    checkGuess: function(userGuess) {
        this.attempts++;

        if (userGuess < this.secretNumber) {
            return 'Загаданное число больше!';
        } else if (userGuess > this.secretNumber) {
            return 'Загаданное число меньше!';
        } else {
            return `Поздравляем, вы угадали число за ${this.attempts} попыток!`;
        }
    }
};

const guessInput = document.getElementById('guess');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const message = document.getElementById('message');

game.startGame(); // запускаем игру при загрузке

checkBtn.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        message.textContent = 'Пожалуйста, введите число!';
        return;
    }

    const result = game.checkGuess(userGuess);
    message.textContent = result;
});

resetBtn.addEventListener('click', function() {
    game.startGame();
    guessInput.value = '';
    message.textContent = '';
});
