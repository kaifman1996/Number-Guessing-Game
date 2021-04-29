let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate random numbers
const generateTarget = () => Math.floor(Math.random() *10)

//Get absolute distance between numbers
const getAbsoluteDistance = (input, target) => Math.abs(target - input)

const compareGuesses = (human, computer, target) => {
  if(human > 9 || human < 0){
    alert('Number out of range')
  }
  let humanGuess = getAbsoluteDistance(human,target)
  let compGuess = getAbsoluteDistance(computer,target)
  if(compGuess > humanGuess){
    return true
  } else {
    return false
  }
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++;
  } else if (winner === 'computer'){
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;



