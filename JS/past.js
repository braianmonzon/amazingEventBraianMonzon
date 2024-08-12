const data = {
    currentDate: "2023-01-01",
    events: [
    {
        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
        __v: 0
    },
  {
  _id: "639c723c992482e5f2834bed",
  name: "Jurassic Park",
  image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
  date: "2022-11-02",
  description:
  "Let's go meet the biggest dinosaurs in the paleontology museum.",
  category: "Museum",
  place: "Field",
  capacity: 82000,
  price: 15,
  __v: 0,
  assistance: 65892,
  },
  {
  _id: "639c723c992482e5f2834bf1",
  name: "Comicon",
  image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
  date: "2022-02-12",
  description:
  "For comic lovers, all your favourite characters gathered in one place.",
  category: "Costume Party",
  place: "Room C",
  capacity: 120000,
  assistance: 110000,
  price: 54,
  __v: 0,
  },
  {
  _id: "639c723c992482e5f2834bf7",
  name: "Electronic Fest",
  image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
  date: "2022-01-22",
  description:
  "The best national and international DJs gathered in one place.",
  category: "Music Concert",
  place: "Room A",
  capacity: 138000,
  assistance: 110300,
  price: 250,
  __v: 0,
  },
  {
  _id: "639c723d992482e5f2834bf9",
  name: "10K for life",
  image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
  date: "2022-03-01",
  description: "Come and exercise, improve your health and lifestyle.",
  category: "Race",
  place: "Soccer field",
  capacity: 30000,
  assistance: 25698,
  price: 3,
  __v: 0,
  },
  {
  _id: "639c723d992482e5f2834bff",
  name: "Just for your kitchen",
  image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
  date: "2022-11-09",
  description:
  "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
  category: "Book Exchange",
  place: "Room D6",
  capacity: 130000,
  assistance: 90000,
  price: 100,
  __v: 0,
  },
  {
  _id: "639c723d992482e5f2834c01",
  name: "Batman",
  image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
  date: "2022-3-11",
  description: "Come see Batman fight crime in Gotham City.",
  category: "Cinema",
  place: "Room D1",
  capacity: 11000,
  assistance: 9300,
  price: 225,
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
    
    for (let i = 0; i < data.events.length; i++) {
      const event = data.events[i];
      const card = document.createElement('div');
      card.classList.add('card');
      card.id = `event-${i}`;
    
      const img = document.createElement('img');
      img.src = event.image;
      img.alt = event.name;
    
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
    
      const name = document.createElement('h3');
      name.textContent = event.name;
    
      const date = document.createElement('p');
      date.textContent = `Date: ${event.date}`;
    
      const description = document.createElement('p');
      description.textContent = event.description;
    
      const category = document.createElement('p');
      category.textContent = `Category: ${event.category}`;
    
      const place = document.createElement('p');
      place.textContent = `Place: ${event.place}`;
    
      const capacity = document.createElement('p');
      capacity.textContent = `Capacity: ${event.capacity}`;
    
      const assistance = document.createElement('p');
      assistance.textContent = `Assistance: ${event.assistance}`;
    
      const price = document.createElement('p');
      price.textContent = `Price: $${event.price}`;
    
      const anchor = document.createElement('a');
      anchor.href = `../pages/details.html?event=${i}`;
      anchor.textContent = 'Details';
    
      cardContent.appendChild(name);
      cardContent.appendChild(date);
      cardContent.appendChild(category);
      cardContent.appendChild(place);
      cardContent.appendChild(capacity);
      cardContent.appendChild(assistance);
      cardContent.appendChild(price);
      cardContent.appendChild(anchor); 
    
      card.appendChild(img);
      card.appendChild(cardContent);
    
      eventCardsContainer.appendChild(card);
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
    
      mostrarCards(eventosFiltrados);
    }
    
    function mostrarCards(eventos) {
      eventCardsContainer.innerHTML = '';
    
      if (eventos.length === 0) {
        const mensajeSinNada = document.createElement('div');
        mensajeSinNada.textContent = 'No se encontraron eventos.';
        mensajeSinNada.style.textAlign = 'center';
        eventCardsContainer.appendChild(mensajeSinNada);
      } else {
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
    
          const date = document.createElement('p');
          date.textContent = `Date: ${event.date}`;
    
          const description = document.createElement('p');
          description.textContent = event.description;
    
          const category = document.createElement('p');
          category.textContent = `Category: ${event.category}`;
    
          const place = document.createElement('p');
          place.textContent = `Place: ${event.place}`;
    
          const capacity = document.createElement('p');
          capacity.textContent = `Capacity: ${event.capacity}`;
    
          const assistance = document.createElement('p');
          assistance.textContent = `Assistance: ${event.assistance}`;
    
          const price = document.createElement('p');
          price.textContent = `Price: $${event.price}`;
    
          const anchor = document.createElement('a');
          anchor.href = `./pages/details.html?event=${event.id}`;
          anchor.textContent = 'Details';
    
          cardContent.appendChild(name);
          cardContent.appendChild(date);
          cardContent.appendChild(category);
          cardContent.appendChild(place);
          cardContent.appendChild(capacity);
          cardContent.appendChild(assistance);
          cardContent.appendChild(price);
          cardContent.appendChild(anchor); 
    
          card.appendChild(img);
          card.appendChild(cardContent);
    
          eventCardsContainer.appendChild(card);
        });
      }
    }
    
    function filtrarPorTexto(array, texto) {
      if (!texto) return array;
      return array.filter(event => event.name.toLowerCase().includes(texto) || event.description.toLowerCase().includes(texto));
    }