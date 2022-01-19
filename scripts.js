
function game() {

  let Array = ['Rock', 'Paper', 'Scissors'];
  let ps;
  let cs;
  let pScore = 0;
  let cScore = 0;

  function computerPlay() {
    let rand = Math.floor(Math.random() * Array.length);
    return Array[rand];
  };

  let Score = document.getElementById('scoreboard').innerText;

  const PlayerClick = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
      ps = event.target.innerText;
      cs = computerPlay();
      playRound(ps, cs);
    })
  });
  
  function playRound(ps, cs) {

      if (ps == cs) {
        console.log("draw");
      } else if (ps == "Rock" && cs !== "Paper") {
        console.log(`${ps}:${cs} Player gewinnt`);
        pScore++;
      } else if (ps == "Paper" && cs !== "Scissors") {
        console.log(`${ps}:${cs} Player gewinnt`);
        pScore++;
      } else if (ps == "Scissors" && cs !== "Rock") {
        console.log(`${ps}:${cs} Player gewinnt`);
        pScore++;
      } else if (cs == "Rock" && ps !== "Paper") {
        console.log(`${ps}:${cs} PC gewinnt`);
        cScore++;
      } else if (cs == "Paper" && ps !== "Scissors") {
        console.log(`${ps}:${cs} PC gewinnt`);
        cScore++;
      } else if (cs == "Scissors" && ps !== "Rock") {
        console.log(`${ps}:${cs} PC gewinnt`);
        cScore++;
      } else {
        console.log("error?!");
      };

      console.log(`${pScore} ${cScore}`);
      Score = "Test!";

    };
 
};

game();