const mili = document.getElementById('mili');
const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hr = document.getElementById('hr');

const start = document.getElementById('timer-start');
const stopp = document.getElementById('timer-stop');
const lap = document.getElementById('timer-lap');
const reset = document.getElementById('timer-reset');
const pause = document.getElementById('timer-pause')

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

const lapCounter = document.getElementById('lap-counter');

const faPause = document.getElementById('fa-pause');
const faPauseText = document.getElementById('fa-pause-text');
const faContinue = document.getElementById('fa-continue');

const timerPause = document.getElementById('timer-pause');
const timerContinue = document.getElementById('timer-continue');

var counter;
let counterForLap = 0;

let MILI = 0,
    SEC = 0,
    MIN = 0,
    HR = 0;

start.addEventListener('click', () => {


    intervall();                        //function call for timer
    button1.style.display = "none";
    button2.style.display = "block";



})

pause.addEventListener("click", () => {
    clearInterval(counter);
    timerPause.style.display = "none"
    timerContinue.style.display = "block"


})

timerContinue.addEventListener("click",()=>{
    intervall();
    timerPause.style.display = "block"
    timerContinue.style.display = "none"
})

stopp.addEventListener("click", () => {
    clearInterval(counter);

    MILI = 0, SEC = 0, MIN = 0, HR = 0;     //resetting the timer values
    button1.style.display = "block";
    button2.style.display = "none";

    mili.innerText = "00";          // reseting the display
    sec.innerText = "00";
    min.innerText = "00";
    hr.innerText = "00";
    $(".lap-counter").html("");
    counterForLap = 0;


})

reset.addEventListener("click", () => {

    MILI = 0, SEC = 0, MIN = 0, HR = 0;
    $(".lap-counter").html("");
    counterForLap = 0;

    mili.innerText = "00";          // reseting the display
    sec.innerText = "00";
    min.innerText = "00";
    hr.innerText = "00";
})

lap.addEventListener("click", () => {

    let a_mili = addZero(MILI);               // passing values through add zero function to get two digit value
    let a_sec = addZero(SEC);
    let a_min = addZero(MIN);
    let a_hr = addZero(HR);

    counterForLap++;
  

    $(`<div> <div>`).text(`${counterForLap} - ${a_hr} : ${a_min} : ${a_sec} : ${a_mili}`).appendTo('.lap-counter');


})



function addZero(number) { // to add zero to form two digit value if its single digit eg. 1 to 01


    if (number < 10) {
        number = "0" + number;
    } else number = "" + number;

    return number;

}


function intervall() {                      // function to get the timer 
    counter = setInterval(() => {


        MILI++;             // miliseconds increases to get secs
        if (MILI == 100) {
            MILI = 0;
            SEC++;
        }

        // SEC++;
        if (SEC == 60) {            //sec increases to get mins
            SEC = 0;
            MIN++;
        }
        if (MIN == 60) {        //mins increases to het hrs
            MIN = 0;
            HR++;
        }
        if (HR == 24) {
            HR = 0;
        }

        // console.log("M :", MILI, "S :", SEC, "HR :", HR)

 
        mili.innerText = addZero(MILI);         // passing values through add zero function to get two digit value        << mili
        sec.innerText = addZero(SEC);
        min.innerText = addZero(MIN);
        hr.innerText = addZero(HR);

        // console.log(addZero(SEC));

    }, 10);
}



/*
todo

    //miliseconds problem
    //add zerofunction for 2dec place
    //reduce repetation
    //add font

 */