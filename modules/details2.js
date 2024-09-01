let eventosData = []; 


function obtenerEventos() {
    return fetch('https://aulamindhub.github.io/amazing-api/events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            eventosData = data.events;
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
}


function displayEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    console.log('Evento ID:', eventId);

    
    const eventData = eventosData.find(event => event._id == eventId);

    console.log('Datos del evento:', eventData);

    if (eventData) {
        document.getElementById('event-image').src = eventData.image;
        document.getElementById('event-name').textContent = eventData.name;
        document.getElementById('event-date').textContent = `Fecha: ${eventData.date}`;
        document.getElementById('event-category').textContent = `Categoría: ${eventData.category}`;
        document.getElementById('event-place').textContent = `Lugar: ${eventData.place}`;
        document.getElementById('event-capacity').textContent = `Capacidad: ${eventData.capacity}`;
        document.getElementById('event-price').textContent = `Precio: $${eventData.price}`;
        document.getElementById('event-assistance').textContent = `Asistencia: ${eventData.assistance || 'No disponible'}`; // Campo de asistencia
    } else {
        console.error('Evento no encontrado');
        document.getElementById('event-name').textContent = 'Evento no encontrado';
    }
}


obtenerEventos().then(() => {
    displayEventDetails();
});