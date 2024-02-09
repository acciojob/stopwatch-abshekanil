//your code here
let timeDisplay = document.getElementById("time");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");

pauseBtn.disabled = true;
stopBtn.disabled = true;
startBtn.disabled = false;

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener("click", function(){
	if(paused)
	{
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalId = setInterval(updateTime, 1000);
		pauseBtn.disabled = false;
		stopBtn.disabled = false;
		startBtn.disabled = true;
		
		pauseBtn.textContent = "pause";
	}
});

pauseBtn.addEventListener("click", function(){
	if(!paused)
	{
		paused = true;
		elapsedTime = Date.now() - startTime;
		clearInterval(intervalId);
		pauseBtn.textContent = "continue";
		startBtn.disabled = false;
	}
});

stopBtn.addEventListener("click", function(){
	paused = true;
	clearInterval(intervalId);
	startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
	hrs = 0;
	mins = 0;
	secs = 0;
	timeDisplay.textContent = "00:00:00";
	pauseBtn.disabled = true;
	stopBtn.disabled = true;
	startBtn.disabled = false;
	
});

function updateTime(){
	elapsedTime = Date.now() - startTime;
	secs = Math.floor((elapsedTime / 1000) % 60 );
	mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60 );
 
	
	secs = pad(secs);
	mins = pad(mins);
	hrs = pad(hrs);
	
	timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}

function pad(unit){
	return(("0")+ unit).length > 2 ? unit : "0" + unit;
}

