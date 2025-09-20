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

const joinButton = document.getElementById('joinButton');

joinButton.addEventListener('click', function() {
    fbq('track', 'Lead');
});