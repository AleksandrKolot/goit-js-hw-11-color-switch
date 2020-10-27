const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
};

const doRandomInteger = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

const doRandomColor = () => {
    const color = colors[doRandomInteger(colors.length - 1)]
    document.body.style.backgroundColor = color;
}

let timerId = null;
let isColorChangeOn = false;

refs.startButton.addEventListener('click', changeColorStart);
refs.stopButton.addEventListener('click', changeColorStop);

function changeColorStart(e){
    isColorChangeOn = true;
    if(isColorChangeOn){
        refs.startButton.setAttribute('disabled', 'true');
    }
    timerId = setInterval(() => doRandomColor(), 1000);
} 

function changeColorStop(e){
    clearInterval(timerId);
    refs.startButton.removeAttribute('disabled');
};