/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

// math.random() gets 0 - 1
// math.random() * 6 gets 0 - 5
// math.floor(math.random() * 6) gets rid of decimal
// math.floor(math.random() * 6) + 1 gets 0 - 6

// dice = Math.floor(Math.random() * 6) + 1;

// changes the DOM
// bind to something
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// grab and store in a var
// var x = document.querySelector('#score-0').textContent;

// change the css
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// callback function
// anomounous function does not have a name and cannot be used outside
document.querySelector('.btn-roll').addEventListener('click', function() {
   var dice = Math.floor(Math.random() * 6) + 1;
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';




} );



