function timeToString(time) {
    /* Hours */
    let diffInHrs = time / 3600000;
    let hh = Math.floor( diffInHrs );

    /* Minute */

    let diffInMin = ( diffInHrs - hh ) * 60;
    let mm = Math.floor( diffInMin );

    /* Second */

    let diffInSec = ( diffInMin - mm) * 60;
    let ss = Math.floor( diffInSec );

    /* Milli Second */

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs)

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMs = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMs}`;
}

// declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// create functions to modify innerHTML

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// create start, pause and reset functions

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    /* Show pause button */
    showButton("PAUSE");
}

/* Pause Functions */

function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

/* Reset functions */

function reset() {
    clearInterval(timerInterval);
    /* well be displayed time */
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

// create functions to display buttons

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;

    buttonToHide.style.display = "none";
    buttonToShow.style.display = "block";
}


// create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);