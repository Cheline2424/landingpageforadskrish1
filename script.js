let countdown = 60;
const timerElement = document.getElementById('timer');

function updateTimer() {
    countdown--;
    timerElement.textContent = countdown;
    if (countdown <= 0) {
        countdown = 60; 
    }
}

setInterval(updateTimer, 1000);