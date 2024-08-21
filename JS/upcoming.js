const data = {
    currentDate: "2023-01-01",
    events: [
      {
  _id: "639c723b992482e5f2834beb",
  name: "Korean style",
  image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
  date: "2023-08-12",
  description:
  "Enjoy the best Korean dishes, with international chefs and awesome events.",
  category: "Food Fair",
  place: "Room A",
  capacity: 45000,
  price: 10,
  __v: 0,
  estimate: 42756,
  },
  {
  _id: "639c723c992482e5f2834bef",
  name: "Parisian Museum",
  image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
  date: "2023-11-02",
  description:
  "A unique tour in the city of lights, get to know one of the most iconic places.",
  category: "Museum",
  place: "Paris",
  capacity: 8200,
  estimate: 8200,
  price: 3500,
  __v: 0,
  },
  {
  _id: "639c723c992482e5f2834bf3",
  name: "Halloween Night",
  image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
  date: "2023-02-12",
  description: "Come with your scariest costume and win incredible prizes.",
  category: "Costume Party",
  place: "Room C",
  capacity: 12000,
  estimate: 9000,
  price: 12,
  __v: 0,
  },
  {
  _id: "639c723c992482e5f2834bf5",
  name: "Metallica in concert",
  image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
  date: "2023-01-22",
  description: "The only concert of the most emblematic band in the world.",
  category: "Music Concert",
  place: "Room A",
  capacity: 138000,
  estimate: 138000,
  price: 150,
  __v: 0,
  },
  {
  _id: "639c723d992482e5f2834bfb",
  name: "15K NY",
  image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
  date: "2023-03-01",
  description:
  "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
  category: "Race",
  place: "New York",
  capacity: 3000000,
  price: 3,
  __v: 0,
  estimate: 2569800,
  },
  {
  _id: "639c723d992482e5f2834bfd",
  name: "School's book fair",
  image: "https://i.postimg.cc/Sst763n6/book1.jpg",
  date: "2023-10-15",
  description: "Bring your unused school book and take the one you need.",
  category: "Book Exchange",
  place: "Room D1",
  capacity: 150000,
  estimate: 123286,
  price: 1,
  __v: 0,
  },
  {
  _id: "639c723d992482e5f2834c03",
  name: "Avengers",
  image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
  date: "2023-10-15",
  description:
  "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
  category: "Cinema",
  place: "Room D1",
  capacity: 9000,
  estimate: 9000,
  price: 250,
  __v: 0,
  },
   ]
    };

    const eventCardsContainer = document.getElementById('event-cards');
    const checkboxes = document.querySelectorAll('.categories input[type="checkbox"]');
    const searchInput = document.getElementById('searchInput');
    
    // Agrega event listeners a los checkboxes y al campo de búsqueda
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', aplicarFiltros);
    });
    searchInput.addEventListener('input', aplicarFiltros);
    
    // Función para crear y agregar las tarjetas de eventos
    function crearTarjetasDeEventos(eventos) {
      eventCardsContainer.innerHTML = '';
    
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
        price.textContent = `Price: $${event.price}`;
    
        const anchor = document.createElement('a');
        anchor.href = `../pages/details.html?event=${event._id}`;
        anchor.classList.add('details-link');
        anchor.dataset.eventId = event.id;
    
        // Agrega los filtros como parámetros en la URL
        const filtroTexto = searchInput.value;
        const filtrosCheckbox = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.id);
        anchor.href += `&search=${encodeURIComponent(filtroTexto)}`;
        filtrosCheckbox.forEach(filtro => {
          anchor.href += `&category=${encodeURIComponent(filtro)}`;
        });
    
        anchor.textContent = 'Details';
    
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
      const filtroTexto = document.getElementById('searchInput').value.toLowerCase();
      const filtrosCheckbox = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);
    
      let eventosFiltrados = data.events;
    
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
    
    
    
    // Llama a la función para crear las tarjetas de eventos inicialmente
    crearTarjetasDeEventos(data.events);

    