//set global variables 
var timeLeft = 76;
var currentQuestionIndex = 0;

//start the game
var startbutton = document.getElementById("start").addEventListener("click", () => {
  countDown();
  setLayout();
  setQuestions();
  setAnswers();

});

//Countdown to 0 function
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

//Start the quiz change card layout to desired question layout
function setLayout(){
  document.querySelector(".card-title").style.textAlign = "left";
  document.querySelector(".card-text").style.textAlign = "left";
  document.querySelector("#start").style.display = "none";
}

//populate the card title and text with questions
function setQuestions(){
  var questionEl = document.querySelector(".card-title");
  questionEl.innerHTML = allQuestions[currentQuestionIndex].questionString;
}
//populate the card body with multiple choice answers
function setAnswers(){
  var answerEl = document.querySelector(".card-text");
  answerEl.innerHTML = "";
createButtons();
}

function createButtons(){
  var answerEl = document.querySelector(".card-text");
  var currentQuestionObject = allQuestions[currentQuestionIndex];

  //loops through the length of choices available in the current question, creates and assigns it to a butn
  for (i = 0; i < currentQuestionObject.choicesArray.length; i++){
   var button = document.createElement("button");
   button.className = "btn custom-btn";
   button.textContent = currentQuestionObject.choicesArray[i];
   //sets data-choice attribute of value of choices array at [i]
   button.setAttribute('data-choice', i);


    button.addEventListener("click", function(){
    //gets the [i] value of the button that is clicked and stores in variable
    var buttonChoiceNum = this.getAttribute("data-choice");
    //stores the index value of the correct number in a variable
    var correctChoice = currentQuestionObject.correct;
    //compares the clicked buttons value with the correct answer value and logs appropriately 
    if(buttonChoiceNum == correctChoice){
    console.log("correct!")
    } else{
    console.log("incorrect");
    timeLeft -= 10;
    }

    if (currentQuestionIndex === allQuestions.length - 1){
      console.log(allQuestions.length);
      GameOver();
      return;
        } else{
    currentQuestionIndex++;
    setQuestions();
    setAnswers();
    }
   })
  answerEl.appendChild(button);
  }
}

//create fucntion that displays GAME OVER and label area input 
function GameOver(){
  questionEl.innerHTML = "Game Over";
}




//Array with all questions stored
var allQuestions = [{
  questionString: "Which of the following function of Number object returns the number's value?",
    choicesArray: ["toString()", "toLocaleStrong()", "toPrecision()", "valueOf()"],
    correct: 3,
       }, {
  questionString: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
    choicesArray: ["slice()","substring()", "split()", "substr()"],
    correct: 1,
      }, {
  questionString: "Which of the following is an advantage of using JavaScript?",
    choicesArray: ["All apply","Immediate feedback to the visitors", "Increased interactvity", "Less server interaction"],
    correct: 0
       }, {
  questionString: "Can you assign a anonymous function to a variable?",
    choicesArray: ["True", "False"],
    correct: 0,
        }, {
  questionString: "Which built-in method calls a function for each element in the array?",
    choicesArray: ["While()", "loop()", "forEach()", "None of the above"],
    correct: 2,
        }];
