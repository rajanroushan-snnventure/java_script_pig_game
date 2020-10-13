/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

console.log('PIG GAME');

var currentPlayerScore, roundPlayerScore, currentActivePlayer, diceVal;

currentPlayerScore = 0;
roundPlayerScore = 0;
currentActivePlayer = 0;
diceVal = 0;

function btn(){
    //
    dice = Math.floor(Math.random)*6+1;
    console.log('Current '+dice);
    if(dice !== 1){
        
        diceVal += dice;
        document.querySelector('#current-'+currentPlayerTurn).textContent = diceVal;

    }else{

        diceVal = 0;
        currentPlayerScore = 0;
        roundPlayerScore = 0;
        document.querySelector('player-0-panel').classList.toggle('active');
        document.querySelector('player-1-panel').classList.toggle('active');

    }
}

//document.querySelector('#btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    dice = Math.floor(Math.random()*6)+1;
    console.log('Current '+dice + ' currentActivePlayer '+ currentActivePlayer);
    if(dice !== 1){
        
        diceVal += dice;
        document.querySelector('#current-'+currentActivePlayer).textContent = diceVal;

    }else{
        currentActivePlayer === 0 ? currentActivePlayer = 1 : currentActivePlayer = 0;
        diceVal = 0;
        currentPlayerScore = 0;
        roundPlayerScore = 0;
        
        document.querySelector('player-0-panel').classList.remove('active');
        document.querySelector('player-1-panel').classList.add('active');

    }

});
