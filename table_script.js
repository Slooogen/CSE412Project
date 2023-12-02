document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display reservations
    function fetchAndDisplayReservations() {
        fetch('/reservations')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Reservation data successfully retrieved
                    var reservations = data.reservations;
                    var reservationCardsContainer = document.getElementById('reservationCards');

                    // Clear existing reservation cards
                    reservationCardsContainer.innerHTML = '';

                    // Create reservation cards
                    reservations.forEach(function (reservation) {
                        var card = createReservationCard(reservation);
                        reservationCardsContainer.appendChild(card);
                    });
                } else {
                    // Display an error message
                    console.error('Error retrieving reservation data:', data.message);
                }
            })
            .catch(error => {
                console.error('Error retrieving reservation data:', error);
            });
    }

    // Initial fetch and display
    fetchAndDisplayReservations();

    // Periodically fetch and display reservations (adjust the interval as needed)
    setInterval(fetchAndDisplayReservations, 5000); // Fetch every 5 seconds (for example)
});

function createReservationCard(reservation) {
    var card = document.createElement('div');
    card.className = 'reservation-card';

    var image = document.createElement('img');
    image.src = reservation.restaurantImage; // Replace with the actual property name
    card.appendChild(image);

    var arrivingTime = document.createElement('p');
    arrivingTime.textContent = 'Arriving Time: ' + reservation.time; // Replace with the actual property name
    card.appendChild(arrivingTime);

    var reservationDate = document.createElement('p');
    reservationDate.textContent = 'Date: ' + reservation.date; // Replace with the actual property name
    card.appendChild(reservationDate);

    var numberOfCustomers = document.createElement('p');
    numberOfCustomers.textContent = 'Guests: ' + reservation.guests; // Replace with the actual property name
    card.appendChild(numberOfCustomers);

    var reservationNumber = document.createElement('p');
    reservationNumber.textContent = 'Reservation #: ' + reservation.id; // Replace with the actual property name
    card.appendChild(reservationNumber);

    return card;
}

