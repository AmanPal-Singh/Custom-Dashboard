


// SETTINGS
function openSettings() {
	document.getElementById("settings").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click',openSettings)


// NAMES AND GREETING
var userName = localStorage.getItem('receivedName');

function saveName() {
	localStorage.setItem('receivedName', userName);
}
function changeName() {
	userName1 = document.getElementById("name-input").value;
	userName = userName1.toUpperCase();
	saveName();
	if (time >= 19) {
		getGreeting_Night()
	}
	else if (time >= 16) {
		getGreeting_Evening()
	}
	else if (time >= 12){
		getGreeting_Afternoon()
	}
	else if (time >= 0) {
		getGreeting_Morning()
	}
}

if (userName == null) {
	userName = "AMAN";
}
document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();
});

function getGreeting_Morning() {
	document.getElementById("welcome").innerHTML  = `GOOD MORNING, ${userName}.  ENJOY YOUR DAY!`;
}
function getGreeting_Night() {
	document.getElementById("welcome").innerHTML  = `BONSOIR, ${userName}.`;
}
function getGreeting_Afternoon() {
	document.getElementById("welcome").innerHTML  = `HAVE A WONDERFUL AFTERNOON, ${userName}.`;
}
function getGreeting_Evening() {
	document.getElementById("welcome").innerHTML  = `GOOD EVENING, ${userName}.`;
}


// CLOCK
var time = new Date().getHours();

if (time >= 19) {
	getGreeting_Night()
}
else if (time >= 16) {
	getGreeting_Evening()
}
else if (time >= 12){
	getGreeting_Afternoon()
}
else if (time >= 0) {
	getGreeting_Morning()
}


function moveHands() {
  with (new Date()) {
    hour = 30 * ((getHours() % 12) + getMinutes() / 60);
    minute = 6 * getMinutes(); 
    seconds = 6 * getSeconds(); 
    document.getElementById("seconds").style.cssText =
      "-webkit-transform:rotate(" + seconds + "deg);";
    document.getElementById("minutes").style.cssText =
      "-webkit-transform:rotate(" + minute + "deg);";
    document.getElementById("hours").style.cssText =
      "-webkit-transform:rotate(" + hour + "deg);";
    setTimeout(moveHands, 1000); // 1 second 
  }
}
window.onload = moveHands; 

// VIDEO BACKGROUND



var videocontainer = document.getElementById('myVideo');
var videosource = document.getElementById('vidsource');
var newmp4 = 'background1.mp4'
var videobutton = document.getElementById("change-video");

function setvideo(src) {
	document.getElementById('div_video').innerHTML = '<video autoplay muted loop id="myVideo"><source src="'+src+'" type="video/mp4"></video>';
}


