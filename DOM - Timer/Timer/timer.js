const timerref = document.createElement('div');
timerref.id = 'timer';
timerref.style.border = "1px solid red";

const bodyref = document.querySelector('body');
bodyref.appendChild(timerref);

const minCountRef = document.createElement('span');
minCountRef.classList.add('min-count');
minCountRef.innerHTML = '--';

const minSuffix = document.createElement('span');
minSuffix.classList.add('min-suffix');
minSuffix.innerHTML = 'm';

const secCountRef = document.createElement('span');
secCountRef.classList.add('sec-count');
secCountRef.innerHTML = '--';

const secSuffix = document.createElement('span');
secSuffix.classList.add('sec-suffix');
secSuffix.innerHTML = 's';

timerref.appendChild(minCountRef);
timerref.appendChild(minSuffix);
timerref.appendChild(secCountRef);
timerref.appendChild(secSuffix);

let minRef = document.getElementsByClassName("min-count");
let secRef = document.getElementsByClassName("sec-count");

let timeInSeconds = 5;
let timeIntervalref;

function getTime(seconds){
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return {
         min, sec
    }
}

function showTimer(){
    const time = getTime(timeInSeconds);
    minRef[0].innerHTML = time.min;
    secRef[0].innerHTML = time.sec;
}

function stopTimer(){
    window.clearInterval(timeIntervalref); 
}

function resetTimer(){
    timeInSeconds = 0;
}

function updateTimer(){
    if(timeInSeconds < 0){
        // timerref.innerHTML = 'Timeout';
        stopTimer();
        return;
    }
    showTimer();
    timeInSeconds--;
}

function startTimer(){
timeIntervalref = window.setInterval(()=>{
    updateTimer();
},1000);
}

const button = document.createElement('div');
button.id = 'button';

const startButtonRef = document.createElement('button');
startButtonRef.classList.add('start-button');
startButtonRef.innerHTML = 'Start';

const resetButtonRef = document.createElement('button');
resetButtonRef.classList.add('reset-button');
resetButtonRef.innerHTML = 'Reset';

button.appendChild(startButtonRef);
button.appendChild(resetButtonRef);

bodyref.appendChild(button);


startButtonRef.addEventListener('click', function(){
    startTimer();
});

resetButtonRef.addEventListener('click',function(){
    stopTimer();
    resetTimer();
    showTimer();
});

const inputref = document.querySelector('.timer-input');
inputref.addEventListener('keyup',function(event){
    timeInSeconds = Number(event.target.value || 0);
    showTimer();
});

