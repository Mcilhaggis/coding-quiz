



//countdown to 0 function
function countDown(){
//select timer from html page
var timer = document.querySelector("counter");
  var quizTimer = setInterval(function() {
    //set time to be 75 seconds
    var timeLeft = 75; 
    //subtract one 1 per second
    timeLeft--;
    //change text on HTML
    timer.innerHTML = timeLeft;

    if (timeLeft <=0) {
     clearInterval(quizTimer);
   }
  }, 1000);
}

countDown();