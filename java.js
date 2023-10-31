const options = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const container = document.querySelector('.container');

let playerScore = 0;
let computerScore = 0; 
let win = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        let playerSelection = e.target.id;
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection)
        playRound(playerSelection, computerSelection);
        game();

        const content = document.createElement('div');
        const playerOption = document.createElement('p');
        const computerOption = document.createElement('p');
        const score = document.createElement('p');
        const winner = document.createElement('p');

        content.appendChild(playerOption);
        playerOption.textContent = "Your Selection:" + playerSelection;
        content.appendChild(computerOption);
        computerOption.textContent = "Computer Selection:" + computerSelection;
        content.appendChild(score);
        score.textContent = "Your Score:" + playerScore + "Computer Score:" + computerScore;
        content.appendChild(winner);
        winner.textContent = win;

        container.appendChild(content);



    });
})

function getComputerChoice() {
    let result = options[Math.floor(Math.random() * options.length)].toLowerCase();
    return result;
}

function playRound(playerSelection, computerSelection) 
{
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie")
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You Win!");
        playerScore ++;
    }
    else {
        console.log("You Lose!")
        computerScore ++;
    }

    console.log(playerScore)
    console.log(computerScore)
}

function game() 
{
    if (playerScore + computerScore === 5)
    {
        if (playerScore > computerScore)
        {
            win = 'You Win the Game!';
        }
        else if (computerScore > playerScore)
        {
            win = 'You Lose the Game!';
        }
        else {
            win = "The Game is a Tie!";
        }
        playerScore = 0;
        computerScore = 0;
    }
}
