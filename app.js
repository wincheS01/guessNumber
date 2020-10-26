window.onload = function() {
  document.getElementById("number-submit").addEventListener("click", playGame)
  document.getElementById("restart-game").addEventListener("click", initGame)
  showYouWon()
}

//Array
let guesses = []

//Returning random number
let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log(randomNumber)
//Main Function2
function playGame() {
  let numberGuess = document.getElementById('number-guess').value;
  checkNumber(randomNumber, numberGuess)
  saveGuessHistory(numberGuess)
  console.log(guesses)
  displayHistory()
}

function checkNumber(randomNumber, numberGuess) {
  if(randomNumber < numberGuess) {
    showNumberAbove()
  } else if(randomNumber > numberGuess ) {
    showNumberLow();
  } else if(randomNumber = numberGuess) {
    showYouWon()
  }
}

function getDialog(dialogType, text) {
  let dialog;
  switch(dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog
}

function showYouWon() {
  const text = "Awesome job, you got it";
 
  let dialog = getDialog('won', text)

  document.getElementById('result').innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high";
  let dialog = getDialog("warning", text)
  document.getElementById('result').innerHTML = dialog
}

function showNumberLow() {
  const text = "Your guess is too low";
  let dialog = getDialog("warning", text)
  document.getElementById('result').innerHTML = dialog
}

function saveGuessHistory(guess) {
  guesses.unshift(guess)
}

function displayHistory() {
  let index = 0;
  let list = "<ul class='list-group'>";
  while(index < guesses.length) {
    list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>"
    index+=1
  }
  list+= '</ul>';
  document.getElementById("history").innerHTML = list
}

function initGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1)
  document.getElementById('result').innerHTML = "";
  guesses = [];
  document.getElementById('history').innerHTML = "";
  console.log(randomNumber)
}