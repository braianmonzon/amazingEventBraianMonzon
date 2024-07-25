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
  anchor.href = `./details.html?event=${i}`; 
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