
function game() {

  let Array = ['Rock', 'Paper', 'Scissors'];
  let ps;
  let cs;
  let pScore = 0;
  let cScore = 0;

  let Score = document.getElementById('scoreboard').textContent;

  let Legend = document.getElementById('legend');
  let newLegend = document.createElement("li");

  function computerPlay() {
    let rand = Math.floor(Math.random() * Array.length);
    return Array[rand];
  };



  const PlayerClick = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
      ps = event.target.innerText;
      cs = computerPlay();
      playRound(ps, cs);
    })
  });

  function setScore(pScore, cScore) {
    Score = `${pScore} : ${cScore}`;
  }
  
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

      setScore(pScore, cScore);

      let LegendChilds = document.getElementById("legend").children.length;

      newLegend.innerText = `${ps} : ${cs}`
      newLegend.id = LegendChilds + 1;
      Legend.insertBefore(newLegend, Legend.children[LegendChilds]);

    };
 
};

game();