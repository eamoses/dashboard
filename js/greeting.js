(function() {
    // Greeting based on user input of their name
    const parsingNameLS = JSON.parse(localStorage.getItem('names')) || [];
    function populateGreeting(nameArray, greetingDisplay) {
        greetingDisplay.innerHTML = `
            ${nameArray[0]}
        `;
        greetingDisplayFirst.innerHTML = `
            ${nameArray[0]}
        `
        greetingContainer.style.display = 'none';
        greetingDisplay.style.display = 'block';
    }
    if (parsingNameLS.length == 0) {
        greetingContainer.style.display = 'block';
        greetingDisplay.style.display = 'none';
        document.getElementById('name').addEventListener('keyup', function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                var inputName = document.getElementById('name').value;
                greetingDisplay.innerHTML = `
                    ${inputName}
                `;
                greetingContainer.style.display = 'none';
                const parsingNameLS = JSON.parse(localStorage.getItem('names')) || [];
                const name = inputName;
                parsingNameLS.push(name);
                populateGreeting(parsingNameLS, greetingDisplay);
                localStorage.setItem('names', JSON.stringify(parsingNameLS));
            }
        });
    } else {
        populateGreeting(parsingNameLS, greetingDisplay);
    }
})()
