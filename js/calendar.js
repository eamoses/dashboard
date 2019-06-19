(function() {
    // Get the day, month, date, year to display
    let today = new Date();
    let month = today.getMonth();
    let day = today.getUTCDate();
    let year = today.getFullYear();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('date').innerHTML = months[month] + " "+ day + ", " + year;

    // Potentially bring in Google Calendar API to show
    // users current appointments
    // or even just a link to their calendar

})()