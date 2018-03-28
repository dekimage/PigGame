/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer,gamePlaying;


init();





//change html 

//document.querySelector('#current-' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';

//read only - getter ... if u change it it's - setter 
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
// change CSS - with style.display

//document.querySelector('.dice').style.display = 'none'; this was here but now in init
//function btn() {
    //do somthing here} btn();

// callback function is that btn down right cus other fun calls it, wiithout btn is anonymous function - no name u type just function() and it works cus it;s defined otherplace- example is real one and for callback is right below this

//document.querySelector('.btn-roll').addEventListener('click', btn); 4 lines below this i put them in init fun. nad the one above them in init was already up there under var scores,round,,



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
         // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
        //add score
        //roundScore = roundScore + dice we can also say cleaner->
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        } else {
        //next player - we made new function down so we can call it cus we need it more than once
         nextPlayer();
        
        }
        
        
    }
   

});


document.querySelector('.btn-hold').addEventListener('click', function(){
   if (gamePlaying) {
       
         // add current score to global score
    scores[activePlayer] += roundScore;
    
    
    // update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // check if player won the game
    if (scores[activePlayer] >= 100) { 
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    // next player
    } else{ nextPlayer();}
   
       
   }
  
   
    
});


function nextPlayer () {
    roundScore = 0;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //Ternary operator sompler if statement
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       /* //  this was my way of doing it and it worked :D however there is a better way
       if (activePlayer === 1) {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        } else {
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        } */
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //to empty the space when roll 1.. but its stupid
         //document.querySelector('.dice').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    gamePlaying = true;
}






































