var timeLeft = 76; 

document.getElementById("start").addEventListener("click", countDown);

//countdown to 0 function
function countDown(){
var timer = document.querySelector("#counter");
  var quizTimer = setInterval(function() {
    timeLeft -= 1;
    timer.innerHTML = timeLeft;

    if (timeLeft <=0) {
     clearInterval(quizTimer);
   }
  }, 1000);
}
