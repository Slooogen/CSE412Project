document.addEventListener('DOMContentLoaded', function() {
    // Example data - replace with data from your backend or localStorage
    var reservations = [
        {
            restaurantImage: 'path_to_image.jpg',
            arrivingTime: '18:00',
            reservationDate: '2023-01-01',
            numberOfCustomers: 4,
            reservationNumber: generateUniqueNumber()
        },
        // Add more reservations as needed
    ];

    var reservationCardsContainer = document.getElementById('reservationCards');
    reservations.forEach(function(reservation) {
        var card = createReservationCard(reservation);
        reservationCardsContainer.appendChild(card);
    });
});

function generateUniqueNumber() {
    return Math.floor(Math.random() * 1000000); // Simple unique number generator
}

function createReservationCard(reservation) {
    var card = document.createElement('div');
    card.className = 'reservation-card';

    var image = document.createElement('img');
    image.src = reservation.restaurantImage;
    card.appendChild(image);

    var arrivingTime = document.createElement('p');
    arrivingTime.textContent = 'Arriving Time: ' + reservation.arrivingTime;
    card.appendChild(arrivingTime);

    var reservationDate = document.createElement('p');
    reservationDate.textContent = 'Date: ' + reservation.reservationDate;
    card.appendChild(reservationDate);

    var numberOfCustomers = document.createElement('p');
    numberOfCustomers.textContent = 'Guests: ' + reservation.numberOfCustomers;
    card.appendChild(numberOfCustomers);

    var reservationNumber = document.createElement('p');
    reservationNumber.textContent = 'Reservation #: ' + reservation.reservationNumber;
    card.appendChild(reservationNumber);

    return card;
}