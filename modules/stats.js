function fetchData() {
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
        .then(response => response.json())
        .then(data => {
            const currentDate = new Date(data.currentDate);

            const highestAssistanceEvent = data.events.reduce((max, event) => {
                const percentage = (event.assistance / event.capacity) * 100;
                return percentage > (max.percentage || 0) ? { name: event.name, percentage } : max;
            }, {});

            document.getElementById('highest-assistance-event').innerText = highestAssistanceEvent.name || 'N/A';
            document.getElementById('highest-assistance-percentage').innerText = highestAssistanceEvent.percentage ? `${highestAssistanceEvent.percentage.toFixed(2)}%` : 'N/A';

            const largestCapacityEvent = data.events.reduce((max, event) => event.capacity > max.capacity ? event : max, {});
            document.getElementById('largest-capacity-event').innerText = largestCapacityEvent.name || 'N/A';
            document.getElementById('largest-capacity-number').innerText = largestCapacityEvent.capacity || 'N/A';

            
            const statsTable = document.getElementById('events-stats');
            const upcomingTable = document.getElementById('upcoming-events');
            const pastTable = document.getElementById('past-events');

            statsTable.innerHTML = ''; 
            upcomingTable.innerHTML = ''; 
            pastTable.innerHTML = '';

            data.events.forEach(event => {
                const percentage = ((event.assistance / event.capacity) * 100).toFixed(2) || 0;

            
                const row = `<tr>
                                <td>${event.name}</td>
                                <td>${event.assistance || 0}</td>
                                <td>${event.capacity}</td>
                                <td>${percentage}%</td>
                              </tr>`;
                statsTable.innerHTML += row;

            
                if (new Date(event.date) > currentDate) {
                    upcomingTable.innerHTML += row;
                }

        
                if (new Date(event.date) <= currentDate) {
                    pastTable.innerHTML += row;
                }
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

window.onload = fetchData;

