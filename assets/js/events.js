function fetchJSON() {
    return fetch('../assets/data/events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.events);
}

function drawCards(events) {
    const container = document.getElementById('events-container');

    // Clear any existing content before drawing
    container.innerHTML = "";

    // Loop through each event and create a card
    events.forEach((event, index) => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.id = `card${index}`;

        // Defines the HTML structure for the event card
        card.innerHTML = `
            <h3>${event.Title}</h3>
            <p>${event.DateTime}</p>
            <p>${event.Location}</p>
            <p>${event.Summary}</p>
        `;
        // Draws the card to the container
        container.appendChild(card);
    });
}

function init() {
    fetchJSON()
        .then(events => {
            drawCards(events);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
        });
}
init();