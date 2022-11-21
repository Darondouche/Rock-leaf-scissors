let wins = 0;
let loses = 0;

const choices = ["leaf","rock","scissors"] ; 
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const leaf = document.getElementById("leaf");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

function runGame(userChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(userChoice + '_' + computerChoice) {
        //cas où l'IA gagne
        case 'leaf_scissors' : 
        case 'rock_leaf' : 
        case 'scissors_rock' : 
            loses += 1;
            gameStatus.innerHTML = `Me: ${userChoice} | IA: ${computerChoice} -> IA Wins`
            break; 
        //cas où je gagne 
        case 'leaf_rock' : 
        case 'rock_scissors' : 
        case 'scissors_leaf' : 
            wins += 1;
            gameStatus.innerHTML = `Me: ${userChoice} | IA: ${computerChoice} -> Me Wins`
            break; 
        //cas d'égalité
        case 'leaf_leaf' : 
        case 'rock_rock' : 
        case 'scissors_scissors' : 
            gameStatus.innerHTML = `Me: ${userChoice} | IA: ${computerChoice} -> Equality`
            break; 
    }
    gameScore.innerHTML = `Me: ${wins} | IA: ${loses}`;
}



leaf.addEventListener("click", () => runGame("leaf"));
rock.addEventListener("click", () => runGame("rock"));
scissors.addEventListener("click", () => runGame("scissors"));
