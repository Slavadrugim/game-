const game = {
    secretNumber: 7,
    attempts: 0,

    startGame: function() {
        this.attempts = 0;
        this.secretNumber = Math.floor(Math.random() * 100) + 1;
    },

    checkGuess: function(userGuess) {
        this.attempts++;
        document.getElementById('tries').textContent = 'Попыток'+this .attempts;

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
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click',function(){
    if (music.paused) {
        music.play();
        musicBtn.textContent = 'Выключить музыку';
    }else {
        music.pause();
        musicBtn.textContent = 'Включить музыку';
    }
});
const clickSound = new Audio('click.mp3');
checkBtn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
});

resetBtn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
});
