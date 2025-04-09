let timerref = document.getElementById("timer");
timerref.style.border = "1px solid red";

let minRef = document.getElementsByClassName("min-count");
let secRef = document.getElementsByClassName("sec-count");

console.log(minRef,secRef); // gives array in console
console.log(minRef[0],secRef[0]);

// We can access and modify the data using innerHTML
// minRef[0].innerHTML = 6;
// secRef[0].innerHTML = 50;

let timeInSeconds = 5;
let timeIntervalref;

//Set timer. This hello keep on executes for every one second.
// setInterval(()=>{
// console.log("Hello");
// },1000);

function getTime(seconds){
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return {
         min, sec
    }
}

function updateTime(){
    if(timeInSeconds < 0){
        timerref.innerHTML = 'Timeout';
        window.clearInterval(timeIntervalref); //Cancel the timer
        return;
    }
    const time = getTime(timeInSeconds);
    minRef[0].innerHTML = time.min;
    secRef[0].innerHTML = time.sec;
    timeInSeconds--;
}

timeIntervalref = window.setInterval(()=>{
    updateTime();
},1000); // 1000ms = 1 second