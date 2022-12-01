rock paper scissors game in javascript

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return console.log('item intered is invalid');
  }
}

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let computerOutput;

  switch (randomNum) {
   case 0:
    return 'rock';
   case 1:
    return 'paper';
   case 2:
    return 'scissors';
 }

}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'you are the winner no matter what';
  }
  
  if (userChoice === computerChoice) {
    return ('Game is tie');
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer Won!';
    } else {
      return 'You Won!';
    }
  }


if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The Computer Won!';
    } else  {
      return 'You Won!';
    }
  }


  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer Won!';
    } else  {
      return 'You Won!';
    }
  }

}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
};


playGame();
