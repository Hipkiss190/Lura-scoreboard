
let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");

let awayScoreBtnOne = document.getElementById("away-score-btn-1");
let awayScoreBtnTwo = document.getElementById("away-score-btn-2");
let awayScoreBtnThree = document.getElementById("away-score-btn-3");


let homeMinusBtnOne = document.getElementById("home-minus-btn-1");
let homeMinusBtnTwo = document.getElementById("home-minus-btn-2");
let homeMinusBtnThree = document.getElementById("home-minus-btn-3");

let awayMinusBtnOne = document.getElementById("away-minus-btn-1");
let awayMinusBtnTwo = document.getElementById("away-minus-btn-2");
let awayMinusBtnThree = document.getElementById("away-minus-btn-3");


let buttonHome = document.getElementById("reset-button-home");
let buttonAway = document.getElementById("reset-button-away");


let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;


function increaseHomeScoreOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore; 
}

function increaseHomeScoreTwo(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreThree(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}


function decreaseHomeScoreOne() {
    homeScore = Math.max(0, homeScore - 1); 
    homeScoreEl.textContent = homeScore; 
}

function decreaseHomeScoreTwo() {
    homeScore = Math.max(0, homeScore - 2);
    homeScoreEl.textContent = homeScore; 
}

function decreaseHomeScoreThree() {
    homeScore = Math.max(0, homeScore - 3);
    homeScoreEl.textContent = homeScore; 
}


function increaseAwayScoreOne(){
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
}

function increaseAwayScoreTwo(){
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
}

function increaseAwayScoreThree(){
    awayScore += 3;
    awayScoreEl.textContent = awayScore; 
}


function decreaseAwayScoreOne() {
    awayScore = Math.max(0, awayScore - 1);
    awayScoreEl.textContent = awayScore; 
}

function decreaseAwayScoreTwo() {
    awayScore = Math.max(0, awayScore - 2);
    awayScoreEl.textContent = awayScore; 
}

function decreaseAwayScoreThree() {
    awayScore = Math.max(0, awayScore - 3);
    awayScoreEl.textContent = awayScore; 
}


function resetHomeScore() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
}

function resetAwayScore() {
    awayScore = 0;
    awayScoreEl.textContent = awayScore;
}

