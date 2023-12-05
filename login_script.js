document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === 'alian1' && password === '2002') {
        // Store username in local storage
        localStorage.setItem('username', username);

        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        // Show error message
        document.getElementById('errorMessage').textContent = 'Incorrect username or password';
    }
});