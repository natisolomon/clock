let timer;
let isRunning = false;
let seconds = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function updateDisplay() {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

pauseBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    laps.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
    const lapTime = display.textContent;
    const lapItem = document.createElement('div');
    lapItem.textContent = `Lap: ${lapTime}`;
    laps.appendChild(lapItem);
});
