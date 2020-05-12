const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  
}

function printSeconds() {
  //getSeconds()
  //secDec.innerHTML = chronometer.getSeconds()
  secUni.innerHTML = chronometer.getSeconds()
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  chronometer.splitClick()
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stopClick()
}

function setSplitBtn() {
  chronometer.splitClick();
}

function setStartBtn() {
  chronometer.startClick(printTime);
}

function setResetBtn() {
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.getAttribute("class")=== "btn stop"){ 
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML="START";
    setStopBtn();

  } else {  
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML="STOP";
    setStartBtn();

  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.getAttribute("class")=== "btn reset"){
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML="SPLIT";
    setResetBtn();
  } else {
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML="RESET";
    printSplit();
  }
  
});
