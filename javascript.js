function getComputerChoice() {
    const x = Math.floor(Math.random() * 3);

    if (x === 0) {
        return "Rock";
    } else if (x === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const userInput = prompt("Rock, Paper, Scissors!");
    return userInput;
}

// this function causes the console show "undefined" because it doesn't return anything, it just show logs.
function playGame() {
    // initialize human and computer scores
    // "let" is required because they're outside the loop and get mutated across the iterations/rounds, 
    // each round updates the same score, 
    // which means they are persisted from the previous round.
    let humanScore = 0;
    let computerScore = 0;

    // function describe the rule of the game
    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase();                   // make user input case-sensitive
        const computer = computerChoice.toLowerCase();

        // case 1: human lose
        if (human === "rock" && computer === "paper") {
            console.log("You lose this round! Paper beats Rock!");
            computerScore++;
        }

        if (human === "paper" && computer === "scissors") {
            console.log("You lose this round! Scissors beats Paper!");
            computerScore++;
        }

        if (human === "scissors" && computer === "rock") {
            console.log("You lose this round! Rock beats Scissors!");
            computerScore++;
        }

        // case 2: computer loses
        if (human === "paper" && computer === "rock") {
            console.log("You win this round! Paper beats Rock!");
            humanScore++;
        }

        if (human === "scissors" && computer === "paper") {
            console.log("You win this round! Scissors beats Paper!");
            humanScore++;
        }

        if (human === "rock" && computer === "scissors") {
            console.log("You win this round! Rock beats Scissors!");
            humanScore++;
        }

        // case 3: tie
        if (human === computer) {
            console.log("It's a tie in this round!")
        }
    }

    // play the game in 5 rounds
    for (let i = 0; i < 5; i++) {

        // create 2 variables so they could be arguments for playGround()
        // the functions can be passed to playGround as parameters, optionally
        // each iteration creates a new block scope, which means the variables aren't being reassigned and they can be "const"
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // play one round
        // do not assign the function to a variable since we only need its effects
        // playGround returns "undefined" which is misleading
        playRound(humanSelection, computerSelection);

        // log the cumulative result
        console.log("Human score: " + humanScore + ". Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!")
    } else if (humanScore < computerScore) {
        console.log("You lose to a computer :(")
    } else {
        console.log("It's a tie overall! This rarely happens!!")
    }
}


