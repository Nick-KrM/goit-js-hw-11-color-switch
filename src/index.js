import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
let isActive = false;

const changeColor = () => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = randomColor;

    // Немного забавы (особенно забавно с интервалом меньше 500мс)
    const firstRandomNumber = randomIntegerFromInterval(-200, 200);
    const secondRandomNumber = randomIntegerFromInterval(-100, 100);
    stopBtn.style.right = `${firstRandomNumber}px`;
    stopBtn.style.top = `${secondRandomNumber}px`;
};

startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;

    intervalId = setInterval(() => {
        changeColor();
    }, 1000)
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    isActive = false;
    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
});