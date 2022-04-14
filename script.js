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
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        return rock
    });
    paper.addEventListener('click', () => {
        return 'paper'
    });
    scissors.addEventListener('click', () => {
        return 'scissors'
    });
}
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        return "tie";
    }else if (playerSelection=="rock" && computerSelection=="scissors"){
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "player";
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "player";
    } else {
        return "computer";
    }
}


playerChoice()