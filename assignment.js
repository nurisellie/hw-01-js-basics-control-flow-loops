/***********

Problem 1:

Write a program that uses a loop to print out (using console.log()) the multiplication table (12 levels) of a provided number

Variables Required (feel free to add your own variables if needed):
baseNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    baseNumber = 2

   Result:
    0
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    22
    24
************/
console.log('Problem 1:')

// Add your code below this line

let baseNumber = 2
let i = 0

do {
  console.log(baseNumber * i)
  baseNumber && i++
} while (i < 12)

/* let baseNumber = 2

for (i = 0; i <= 12; i++) {
  console.log (baseNumber * i)
} */

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 2:

Write a program that prints (using console.log()) the largest number in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)
currentLargestNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    values = [57, 13, 4, 38]

   Result: 57

2. Given the following:
    values = [3, 48, 29, 12, 18]

   Result: 48

************/

console.log('Problem 2:')

// Add your code below this line

const numbers = [57, 13, 4, 38]

let reversedNumbers = numbers.sort().reverse()
let largestNumber = reversedNumbers[0]

console.log(largestNumber)
// 57 should pop up

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 3:

Write a program that prints out (using console.log()) the winner of a rock paper scissors game between two players

- if the playerA chooses scissors and playerB chooses rock, playerB wins
- if the playerA chooses scissors and playerB chooses scissors, game is a tie
- if the playerA chooses paper and playerB chooses rock, playerA wins
- if the playerA chooses rock and playerB chooses paper, playerB wins
- etc (program should account for all available scenarios)

Variables Required (feel free to add your own variables if needed):
playerAChoice (string)
playerBChoice (string)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    playerAChoice = "rock"
    playerBChoice = "paper"

   Result: "playerB wins"

2. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "scissors"

   Result: "tie"

3. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "paper"

   Result: "playerA wins"
************/

console.log('Problem 3:')

// Add your code below this line

let playerAChoice = "rock"
let playerBChoice = "rock"

if (playerAChoice === playerBChoice) {
  console.log("It's a tie! Try again.")
} else if (playerAChoice === "rock" && playerBChoice === "paper") {
  console.log("Player A wins!")
} else if (playerAChoice === "rock" && playerBChoice === "scissors") {
  console.log("Player B wins!")
} else if (playerAChoice === "scissors" && playerBChoice === "paper") {
  console.log("Player A wins!")
} else if (playerAChoice === "scissors" && playerBChoice === "rock") {
  console.log("Player B wins!")
} else if (playerAChoice === "paper" && playerBChoice === "rock") {
  console.log("Player A wins!")
} else if (playerAChoice === "paper" && playerBChoice === "scissors") {
  console.log("Player B wins!")
} else {
  console.log("Come on, be serious. It's either rock, paper, or scissors.")
}

// Add your code above this line

console.log('')
console.log('-----------------')
