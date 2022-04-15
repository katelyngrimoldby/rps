let round = 1;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


function getNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function computerChoice() {
    let choice = getNumberFromRange(1, 3);

    switch (choice) {
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        setScore('tie');
    }else if (playerSelection=='rock' && computerSelection=='scissors'){
        setScore('player');
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        setScore('player');
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        setScore('player');
    } else {
        setScore('computer');
    }
}

function setScore(result){
    let playerScore = 0;
    let computerScore = 0;
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    const container = document.querySelector('.rounds')

        if(result == 'player'){
            playerScore++;
            player.querySelector('.score').textContent = playerScore;
        } else if(result == 'computer'){
            computerScore++;
            computer.querySelector('.score').textContent = computerScore;
        }

        switch(round) {
            case 1:
                container.querySelector('#one').style.backgroundColor = '#32d147'
                break;
            case 2:
                container.querySelector('#two').style.backgroundColor = '#32d147'
                break;
            case 3:
                container.querySelector('#three').style.backgroundColor = '#32d147'
                break;
            case 4:
                container.querySelector('#four').style.backgroundColor = '#32d147'
                break;
            case 5:
                container.querySelector('#five').style.backgroundColor = '#32d147'
                break;
        }
        round++   
}

rock.addEventListener('click', () => {
    if(round <= 5){
        playRound('rock', computerChoice())
    }else{
        alert('The game is over!')
    }
});
paper.addEventListener('click', () => {
    if(round <= 5){
        playRound('paper', computerChoice())
    }else{
        alert('The game is over!')
    }
});
scissors.addEventListener('click', () => {
    if(round <= 5){
        playRound('scissors', computerChoice())
    }else{
        alert('The game is over!')
    }
});