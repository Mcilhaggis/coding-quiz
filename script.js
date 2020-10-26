//set timer 
var timeLeft = 76;
var currentQuestionIndex = 0;

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

//Start the quiz - change the contents of the card to the quiz questions 
//change card layout to question layout
function setLayout(){
  document.querySelector(".card-title").style.textAlign = "left";
  document.querySelector(".card-text").style.textAlign = "left";
  document.querySelector("#start").style.display = "none";
}

//populate the card title and text with questions
function setQuestions(){
  var questionEl = document.querySelector(".card-title");
  questionEl.innerHTML = allQuestions[currentQuestionIndex].question_string;
}
//populate the card body with multiple choice answers
function setAnswers(){
  var answerEl = document.querySelector(".card-text");
  answerEl.innerHTML = "";
createButtons();
}

function createButtons(){
  var answerEl = document.querySelector(".card-text");
  //sets the indexed questions as a variable
  var currentQuestionObject = allQuestions[currentQuestionIndex];
  console.log(currentQuestionObject);
  console.log(currentQuestionObject.choicesArray);
  //loops through the length of choices available in the current question, creates and assigns it to a butn
  for (i =0; i < currentQuestionObject.choicesArray.length; i++){
   var button = document.createElement("button");
   button.className = "btn custom-btn";
   console.log(currentQuestionObject.choicesArray[i]);
   button.textContent = currentQuestionObject.choicesArray[i];
   //sets data-choice attribute of value of choices array at [i]
   button.setAttribute('data-choice', i);
   button.addEventListener("click", function(){
    //gets the [i] value of the button that is clicked and stores in variable
    var buttonChoiceNum = this.getAttribute("data-choice");
    //stores the index value of the correct number in a variable
    var correctChoice = currentQuestionObject.correct;
    console.log(buttonChoiceNum);
    console.log(correctChoice);
    //compares the clicked buttons value with the correct answer value and alerts appropriately 
    if(buttonChoiceNum == correctChoice){
      alert("correct!")
    } else{
      alert("incorrect");
    }
   })
  answerEl.appendChild(button);
  }
}

function iterateOnClick(){
  document.getElementsByClassName("custom-btn").addEventListener("click", () => {

  })
}





//Array with all questions stored
var allQuestions = [{
  question_string: "Which of the following function of Number object returns the number's value?",
    choicesArray: ["toString()", "toLocaleStrong()", "toPrecision()", "valueOf()"],
    correct: 3,
       }, {
  question_string: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
    choicesArray: ["slice()","substring()", "split()", "substr()"],
    correct: 1,
      }, {
  question_string: "Which of the following is an advantage of using JavaScript?",
    choicesArray: ["All apply","Immediate feedback to the visitors", "Increased interactvity", "Less server interaction"],
    correct: 0
}];

function nextQuestion(){
  //how to move to the next question in a multilple choice array situation once an answer has been selected
  questionCount++;

}