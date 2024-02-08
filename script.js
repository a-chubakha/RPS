// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      console.log("player chose rock");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      console.log("player chose paper");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      console.log("player chose scissors");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

function displayChoice(htmlId, imgName) {
  document.getElementById(htmlId).src = imgName;
}

function getCompChoice() {
  randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum == 1) {
    displayChoice("computer-choice", "images/rock.png");
    console.log("computer chose rock");
    return "rock";
  } else if (randNum == 2) {
    displayChoice("computer-choice", "images/paper.png");
    console.log("computer chose paper");
    return "paper";
  } else if (randNum == 3) {
    displayChoice("computer-choice", "images/scissors.png");
    console.log("computer chose scissors");
    return "scissors";
  } else {
    return "error";
  }
}

function getResult(pChoice, cChoice) {
  if (pChoice == "rock") {
    if (cChoice == "rock") {
      return "tie";
    } else if (cChoice == "paper") {
      return "computer";
    } else if (cChoice == "scissors") {
      return "player";
    } else {
      return "error";
    }
  } else if (pChoice == "paper") {
    if (cChoice == "rock") {
      return "player";
    } else if (cChoice == "paper") {
      return "tie";
    } else if (cChoice == "scissors") {
      return "computer";
    } else {
      return "error";
    }
  } else if (pChoice == "scissors") {
    if (cChoice == "rock") {
      return "computer";
    } else if (cChoice == "paper") {
      return "player";
    } else if (cChoice == "scissors") {
      return "tie";
    } else {
      return "error";
    }
  } else {
    return "error";
  }
}

function showResult(winner) {
  if (winner == "player") {
    buttonsArea.innerHTML = "You win!";
  } else if (winner == "computer") {
    buttonsArea.innerHTML = "Computer wins!";
  } else {
    buttonsArea.innerHTML = "It's a tie!";
  }
}

function updateScore(winner) {
  if (winner == "player") {
    pScore += 1;
    playerScoreEl.innerHTML = pScore;
    console.log("player wins");
  } else if (winner == "computer") {
    cScore += 1;
    computerScoreEl.innerHTML = cScore;
    console.log("computer wins");
  } else if (winner == "tie") {
    console.log("tie");
  } else {
    console.log("Error");
  }
}
