
/* Tempo Casamento */

var countDownDate = new Date("Jan 5, 2020 15:37:25").getTime();

var x = setInterval(() => {
  
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `${days}`;
  document.getElementById("hours").innerHTML = `${hours}`;
  document.getElementById("minutes").innerHTML = `${minutes}`;
  document.getElementById("seconds").innerHTML = `${seconds}`;

  if (distance < 0) {
    clearInterval(x); 
    document.getElementById("date").innerHTML = "expirado";
  }


}, 1000);

