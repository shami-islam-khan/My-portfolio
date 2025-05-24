let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const choice = document.querySelectorAll(".choice");
const choice_rock = document.querySelector("#rock");
const choice_paper = document.querySelector("#paper");
const choice_scissors = document.querySelector("#scissors")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  if (randIdx==0){
    choice_rock.style.backgroundColor = "#ffdc12";
    choice_paper.style.backgroundColor = "#ffdc1200";
    choice_scissors.style.backgroundColor = "#ffdc1200";
  }
  else if (randIdx==1){
    choice_rock.style.backgroundColor = "#ffdc1200";
    choice_paper.style.backgroundColor = "#ffdc12";
    choice_scissors.style.backgroundColor = "#ffdc1200";
  }
  else{
    choice_rock.style.backgroundColor = "#ffdc1200";
    choice_paper.style.backgroundColor = "#ffdc1200";
    choice_scissors.style.backgroundColor = "#ffdc12";
  }
  
  return options[randIdx];
};

const drawGame = (compChoice) => {
  if (compChoice == "rock"){
    choice_rock.style.backgroundColor = "#9a3fff";
    choice_paper.style.backgroundColor = "#ffdc1200";
    choice_scissors.style.backgroundColor = "#ffdc1200";
  }
  else if (compChoice == "paper"){
    choice_rock.style.backgroundColor = "#ffdc1200";
    choice_paper.style.backgroundColor = "#9a3fff";
    choice_scissors.style.backgroundColor = "#ffdc1200";
  }
  else {
    choice_rock.style.backgroundColor = "#ffdc1200";
    choice_paper.style.backgroundColor = "#ffdc1200";
    choice_scissors.style.backgroundColor = "#9a3fff";
  }

  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";    
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame(compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      choice_rock.style.backgroundColor = "#27ff12";
      // choice_paper.style.backgroundColor = "#ffdc1200";
      // choice_scissors.style.backgroundColor = "#ffdc12";
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      choice_paper.style.backgroundColor = "#27ff12";
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      choice_scissors.style.backgroundColor = "#27ff12";
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  
  

  // choice_rock.style.backgroundColor = "#ffdc1200";
  // choice_paper.style.backgroundColor = "#ffdc1200";
  // choice_scissors.style.backgroundColor = "#ffdc1200";
  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});