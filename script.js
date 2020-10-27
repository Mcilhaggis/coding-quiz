//set global variables 
var timeLeft = 76;
var currentQuestionIndex = 0;
var finalScore = document.querySelector("#printedTotal");

//start the game
var startbutton = document.getElementById("start").addEventListener("click", () => {
  countDown();
  setLayout();
  setQuestions();
  setAnswers();
});

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

//Countdown to 0 function
function countDown(){
var timer = document.querySelector("#counter");
  quizTimer = setInterval(function() {
    timeLeft -= 1;
    timer.innerHTML = timeLeft;

    if (timeLeft <=0) {
     clearInterval(quizTimer);
     gameOverDisplay();
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
//if the question index is equal to the total number of questions end game, else bering up the next Q
    if (currentQuestionIndex === allQuestions.length - 1){
      console.log(allQuestions.length);
      gameOverDisplay();
        } else{
    currentQuestionIndex++;
    setQuestions();
    setAnswers();
    }
   })
  answerEl.appendChild(button);
  }
}

//create function that displays GAME OVER and label area input 
function gameOverDisplay(){
 clearInterval(quizTimer);
 finalScore.innerHTML = " " + timeLeft;
 localStorage.setItem("mostRecentScore", timeLeft);//possible score is not the correct word
 console.log(timeLeft);
 console.log(quizTimer);
 document.getElementById("startGameCard").style.display = "none";
 document.getElementById("resultsBox").style.display = "block";
}

//Highscore Board
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const maxHighScores = 5

//gets the highscores from local storage, or if there are none will return an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
username.addEventListener('keyup', () => {
saveScoreBtn.disabled = !username.value; //disable save button until theres content in there
});

saveHighScore = (e) => {
  e.preventDefault();// prevents the form from posting to a different page
  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);
  highScores.sort( (a,b) => b.score - a.score) // if b score is higher than a score place it higher
  highScores.splice(5); //cut off at index 5, top 5 leaderboard
  localStorage.setItem("highScores", JSON.stringify(highScores)); //stores scores on refresh from local storage
};


//Populating the highscore Board from local storage into html 
const highScoreList = document.getElementById('highScoresList');
const highScoreBoard = JSON.parse(localStorage.getItem('highScores')) || [];

highScoreList.innerHTML =  highScores
  .map(score => { // map converts the items in the array to covert to new string version of an li
    return (`<li class="high-score">${score.name} - ${score.score}</li>`);
})
.join("");
console.log(highScores);

//Bring up the Highscore Board from results page
document.getElementById("viewScoreBoard").addEventListener("click", function(){
  console.log("I got clicked");
  document.getElementById("resultsBox").style.display = "none";
  document.getElementById("highScores").style.display = "block";
});

//bring up highscore board from top left link click
document.getElementById("navHighScore").addEventListener("click", function(){
  console.log("I got clicked");
  document.getElementById("resultsBox").style.display = "none";
  document.getElementById("navHighScore").style.display = "none";
  document.getElementById("highScores").style.display = "block";
});













//Replay from ScoreBoard view
var restartGame = document.getElementById("replay").addEventListener("click", function(){
  console.log("I got clicked");
  document.getElementById("highScores").style.display = "none";
  document.getElementById("startGameCard").style.display = "block";
  timeLeft = 76;
  currentQuestionIndex = 0;
  countDown();
  setLayout();
  setQuestions();
  setAnswers();
});

//Restarts the game from end game screen
var restartGame = document.getElementById("playAgain").addEventListener("click", function(){
  console.log("I got clicked");
  document.getElementById("resultsBox").style.display = "none";
  document.getElementById("startGameCard").style.display = "block";
  timeLeft = 76;
  currentQuestionIndex = 0;
  countDown();
  setLayout();
  setQuestions();
  setAnswers();
})