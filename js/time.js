(function() {
    // Current time display
    let today = new Date();
    let time = today.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    let hours = today.getHours();
    document.getElementById('time').innerHTML = time;

    // Message based on the time
    let message = '';
    if (hours < 11) {
        message = 'good morning';
    } else if (hours > 17) {
        message = 'good evening';
    } else {
        message = 'good afternoon';
    }
    
    document.getElementById('greeting').innerHTML = message;
})()