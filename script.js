// Countdown Timer
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

// Pixel Event Tracking
const joinButton = document.getElementById('joinButton');

if (joinButton) {
    joinButton.addEventListener('click', function() {
        fbq('track', 'Lead', {
            content_name: 'Telegram Join BHT CLUB',
            content_category: 'Gambling',
            value: 10.00,
            currency: 'USD',
            event_source: 'Landing Page',
            funnel_stage: 'Acquisition'
        });
    });
}
