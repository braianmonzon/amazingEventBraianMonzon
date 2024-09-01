const eventCardsContainer = document.getElementById('event-cards');
const checkboxes = document.querySelectorAll('.categories input[type="checkbox"]');
const searchInput = document.getElementById('searchInput');
let eventosData = [];


function obtenerEventos() {
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
        .then(response => response.json())
        .then(data => {
            eventosData = data.events;
            aplicarFiltros(); 
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', aplicarFiltros);
});
searchInput.addEventListener('input', aplicarFiltros);

function crearTarjetasDeEventos(eventos) {
    eventCardsContainer.innerHTML = '';

    if (eventos.length === 0) {
        const noEventsMessage = document.createElement('p');
        noEventsMessage.textContent = 'No se encontraron eventos.';
        eventCardsContainer.appendChild(noEventsMessage);
        return;
    }

    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = `event-${event.id}`;

        const img = document.createElement('img');
        img.src = event.image;
        img.alt = event.name;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const name = document.createElement('h3');
        name.textContent = event.name;

        const description = document.createElement('p');
        description.textContent = `Descripción: ${event.description}`;

        const price = document.createElement('p');
        price.textContent = `Precio: $${event.price}`;

        const anchor = document.createElement('a');
        anchor.href = `../pages/details.html?event=${event._id}`;
        anchor.classList.add('details-link');
        anchor.dataset.eventId = event.id;

        anchor.textContent = 'Detalles';

        cardContent.appendChild(name);
        cardContent.appendChild(description);
        cardContent.appendChild(price);
        cardContent.appendChild(anchor);

        card.appendChild(img);
        card.appendChild(cardContent);

        eventCardsContainer.appendChild(card);
    });
}

function aplicarFiltros() {
    const filtroTexto = searchInput.value.toLowerCase();
    const filtrosCheckbox = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    let eventosFiltrados = eventosData;

    // Filtrar por años específicos (2022 y 2019)
    eventosFiltrados = eventosFiltrados.filter(event => {
        const eventYear = new Date(event.date).getFullYear();
        return eventYear === 2022 || eventYear === 2019;
    });

    // Filtrar por texto
    eventosFiltrados = filtrarPorTexto(eventosFiltrados, filtroTexto);

    // Filtrar por categoría
    if (filtrosCheckbox.length > 0) {
        eventosFiltrados = eventosFiltrados.filter(event => filtrosCheckbox.includes(event.category));
    }

    crearTarjetasDeEventos(eventosFiltrados);
}

function filtrarPorTexto(array, texto) {
    if (!texto) return array;
    return array.filter(event => event.name.toLowerCase().includes(texto) || event.description.toLowerCase().includes(texto));
}

// Llama a la función para obtener eventos al cargar la página
obtenerEventos();