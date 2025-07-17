//return a random value from 0 and less than max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const choice = getRandomInt(3);
    //if choice is 0, corresponds to rock
    if(choice == 0){
        return rock;
    }
    //else if choice = 1, corresponds to paper
    else if(choice == 1){
        return paper;
    }
    //else, corresponds to scissors
    else{
        return scissors;
    }




}
function getHumanChoice(){
    //open a blank prompt window
    const user_choice = window.prompt("Please select either rock, paper, or scissors");
    return user_choice;


}



function playGame(){
    function playRound(computerChoice,humanChoice){
        const human = humanChoice.toLowerCase();
        //tie scenarios
        if(human == computerChoice){
            console.log("It's a tie");
        }
        //scenarios where you will win
        else if((human == "rock" && computerChoice == "scissors") || (human == "paper" && computerChoice == "rock")||
        (human == "scissors" && computerChoice == "paper")){
            console.log("You Win! " + human + " beats " + computerChoice);
            humanScore++;
        }
        //every other scenario, you lose
        else{
            console.log("You lose! " + computerChoice + " beats " + human);
            computerScore++;
        }


    }

    let humanScore = 0;
    let computerScore = 0;
    //play for five times
    for(i = 0; i < 5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection,humanSelection);
    }
    if(computerScore > humanScore){
        console.log("You lose");
    }
    else if(computerScore < humanScore){
        console.log("You Win");

    }
    //any other state is a draw
    else{
        console.log("Draw");
    }

}

playGame();