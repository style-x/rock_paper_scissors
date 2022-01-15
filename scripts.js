
function game() {

  for (i = 0; i < 5; i++) {

    function playRound(playerSelection, computerSelection) {
      
    }

    function computerPlay() {
      let Array = ['Rock', 'Paper', 'Scissors'];
      let rand = Math.floor(Math.random() * Array.length);

      console.log(Array[rand]);
    }
    
    const playerSelection = window.prompt('Rock-Paper-Scissors- Your Choice:'); 
    const computerSelection = computerPlay();

    console.log(playerSelection);
    //console.log(playRound(playerSelection, computerSelection));
  }

}

game();