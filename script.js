function getNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function computerChoice() {
    let choice = getNumberFromRange(1, 3);

    console.log(choice)

    switch (choice) {
        case 1: 
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playerChoice() {
    let playerChoice = prompt("Type rock, paper, or scissors");

    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
}
function playRound(playerSelection, computerSelection) {

    let result

    if (playerSelection == computerSelection){
        return result = "tie";
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        return result = "player";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return result = "player";
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        return result = "player";
    } else {
        return result = "computer";
    }
}

function checkScore(player, computer){
    let score

    if (player > computer){
        return score =`${player}:${computer} Player`;
    } else if (player < computer){
         return score =`${computer}:${player} Computer`;
    } else{
        return score =`Tied at ${player}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i<5; i++){

       switch (playRound(playerChoice(), computerChoice())) {
            case "player":
                playerScore++;
                console.log("Player wins!");
                break;
            case "computer":
                computerScore++;
                console.log("Computer wins!");
                break;
            case "tie":
                console.log("Tie!");
                break;
            case "fail":
                console.log('fuck you')
                break;
       }
       console.log(`Score: ${checkScore(playerScore, computerScore)}`);
    }
    console.log(`Final Score: ${checkScore(playerScore, computerScore)}`);
}

game()