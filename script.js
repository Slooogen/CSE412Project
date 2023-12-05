function redirectTo(url) {
    window.location.href = url;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function logout() {
  // Remove the username from localStorage
  localStorage.removeItem('username');

  // Optionally, redirect to a different page after logging out
  window.location.href = 'index.html';
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
document.getElementById('loginButton').addEventListener('click', function() {
    redirectTo('login.html');
});

document.getElementById('tableButton').addEventListener('click', function() {
    redirectTo('table.html');
});

function checkLogin() {
  
  window.location.href = 'reserve.html';
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn) {
      window.location.href = 'reserve.html';

  } else {
      alert('Please login first');
      window.location.href = 'login.html';
      return false;
  }
}
