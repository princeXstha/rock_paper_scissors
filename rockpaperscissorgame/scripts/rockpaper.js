let score= JSON.parse(localStorage.getItem('score'))|| {
    wins: 0,
    losses: 0,
    ties: 0
  };
  function updateresult(){
    document.querySelector('.js-result').innerHTML= ` `;
  }
    function updatemoves(){
        document.querySelector('.js-moves').innerHTML= ` `;
    }
    function updatescore(){
        document.querySelector('.js-score').innerHTML= ` Wins: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;
    
    }
  function pickComp(){
            let computerMove = '';
            const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
        }
            return computerMove;
        }
        let isauto=false;
        let intervalid;
    function autoplay(){
            if(!isauto){
            intervalid=setInterval(() =>{
                const playerMove=pickComp();
                playGame(playerMove);
            },2000)
            isauto=true;
        }
        else{
            clearInterval(intervalid);
        }
     }
     document.querySelector('.rock').addEventListener('click',() =>{
        playGame('rock')});
    document.querySelector('.paper').addEventListener('click',() =>{
            playGame('paper')});
    document.querySelector('.scissor').addEventListener('click',() =>{
                playGame('scissors')});
    document.body.addEventListener('keydown',(event) => {
            if(event.key === 'r'){
                playGame('rock');
            }
            else if(event.key === 'p'){
                playGame('paper');
            }
            else if(event.key === 's'){
                playGame('scissors');
            }
    })
function playGame(playerMove){
                computerMove=pickComp();
                let result = '';

                        if (playerMove === 'scissors') {
                                if (computerMove === 'rock') {
                                    result = 'You lose.';
                                    score.losses+=1;
                                } else if (computerMove === 'paper') {
                                    result = 'You win.';
                                    score.wins+=1;
                                } else if (computerMove === 'scissors') {
                                    result = 'Tie.';
                                    score.ties+=1;
                                }

                        } else if (playerMove === 'paper') {
                                if (computerMove === 'rock') {
                                    result = 'You win.';
                                    score.wins+=1;
                                } else if (computerMove === 'paper') {
                                    result = 'Tie.';
                                    score.ties=score.ties+1;
                                } else if (computerMove === 'scissors') {
                                    result = 'You lose.';
                                    score.losses+=1;
                                }
                        
                        } else if (playerMove === 'rock') {
                                if (computerMove === 'rock') {
                                    result = 'Tie.';
                                    score.ties+=1;
                                } else if (computerMove === 'paper') {
                                    result = 'You lose.';
                                    score.losses+=1;
                                } else if (computerMove === 'scissors') {
                                    result = 'You win.';
                                    score.wins+=1;
                                }
                        }
                        localStorage.setItem('score',JSON.stringify(score));
                       updatescore();
                       document.querySelector('.js-result').innerHTML= result;
                       document.querySelector('.js-moves').innerHTML= `YOU <img class="res1" src="${playerMove}.jpeg"> - <img class="res2" src="${computerMove}.jpeg"> COMPUTER`;
  }