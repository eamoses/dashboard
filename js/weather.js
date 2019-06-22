function success(position) {
    _GET = (url, callback) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(callback) callback(JSON.parse(xhr.responseText))
            }
        }
        xhr.send(null)
    }
    function decryptKey (cypherKey) {
        var key = cypherKey.split('');
        key = key.map(function(char) {
            return String.fromCharCode(char.charCodeAt() + 1); 
        });
        key = key.join('');
        return key;
    }
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    var cypherKey1 = 'a7073/1d8a1`c6a8d038c817/3e2`be8';
    var apiKey = decryptKey(cypherKey1);
    var APIendpoint = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&APPID='+apiKey+'&units=imperial'
    _GET(APIendpoint, (data) => {
        let temp = Math.round(data.list["0"].main.temp_max)
        weatherWidget.innerHTML = `${temp}°`;
        description.innerHTML = `${data.list["0"].weather["0"].description}`
        homeCity.innerHTML = `${data.city.name}`
    })
}

function error() {
    alert('Please turn on your browsers geolocation to get local weather information.');
}
if(!navigator.geolocation) {
    alert('For the love of all that is good, please cease use of Internet Explorer!');
} else {
    navigator.geolocation.getCurrentPosition(success, error);
}