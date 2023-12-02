document.addEventListener('DOMContentLoaded', function() {
    var isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        // User is logged in, show the reservation form
        document.getElementById('reservationForm').style.display = 'block';
    } else {
        // User is not logged in, show a message
        document.getElementById('loginCheck').innerHTML = 'Please Login First';
    }
});

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var reservationData = {
        time: document.getElementById('time').value,
        date: document.getElementById('date').value,
        guests: document.getElementById('guests').value,
        specialRequest: document.getElementById('specialRequest').value
    };

    // Get the username from local storage
    var username = localStorage.getItem('username');
    reservationData.username = username;

    // Send reservationData to the backend
    fetch('/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Reservation saved successfully, redirect to table.html
            window.location.href = 'table.html';
        } else {
            // Display an error message
            console.error('Error saving reservation:', data.message);
        }
    })
    .catch(error => {
        console.error('Error saving reservation:', error);
    });
});

