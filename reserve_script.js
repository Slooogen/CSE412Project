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

    // TODO: Send reservationData to the backend

    // Redirect to table.html
    window.location.href = 'table.html';
});