
function game() {

  let Array = ['Rock', 'Paper', 'Scissors'];
  let playerSelection;
  let computerSelection;

  function computerPlay() {
    let rand = Math.floor(Math.random() * Array.length);
    return Array[rand];
  };

  const PlayerClick = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
      playerSelection = event.target.innerText;
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    })
  });
  
  function playRound(playerSelection, computerSelection) {
    console.log(`${playerSelection} vs ${computerSelection}`)
  };
 
};

game();