//

function rps(){
    console.log("Let the Game Begin");

    const userChoicePrompt = prompt("Enter Rock/Paper/Scissors");
    let userChoice = userChoicePrompt.toLocaleLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        computerChoice = "rock";
    } else if(randomNumber === 2) {
        computerChoice = "paper";
    } else{
        computerChoice = "scissors"
    }

    

    
}