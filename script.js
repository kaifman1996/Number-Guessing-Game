let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  let number = Math.random() *10
  number = Math.floor(number)
  return number
}

function alert(input){
  if(input > 9){
    console.log('Number out of range')
  }
}

//Get absolute distance between numbers
function getAbsoluteDistance(input, target){
  let absDist = target - input
  if(Math.sign(absDist)=== -1){
    absDist = -absDist
  }
  return absDist
}

function compareGuesses(human, computer, target){
  alert(human);
  let humanGuess = getAbsoluteDistance(human,target)
  let compGuess = getAbsoluteDistance(computer,target)
  if(compGuess > humanGuess){
    return true
  } else {
    return false
  }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  } else if (winner === 'computer'){
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}


