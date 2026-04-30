function fetchEvents() {
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

    // Loop through each event and create a card
    events.forEach((event, index) => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.id = `card${index}`;

        // Defines the HTML structure for the event card
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.datetime}</p>
            <p>${event.location}</p>
            <p>${event.summary}</p>
        `;
        // Draws the card to the container
        container.appendChild(card);
    });
}

function init() {
    fetchEvents()
        .then(events => {
            drawCards(events);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
        });
}
init();
