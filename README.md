# Match-and-Dash
## MVP
Taking the traditional concentration card game, also known as memory, and making it more challenging by adding a timer for the player to compete against. In each round the number of pairs needed to win the round will increase, adding pressure to the player as they hurry to match up cards and dash against time.

## WIREFRAME

#### START GAME
![Start Game] (https://i.imgur.com/wpYkFyk.jpg)

#### GAME PLAY
![Game Play] (https://i.imgur.com/PojMMIl.jpg)

#### END OF ROUND
![End of Round] (https://i.imgur.com/i5IMpR7.jpg)

#### END OF GAME
![End of Game] (https://i.imgur.com/FKNQXof.jpg)

## USER STORY
#### 1 - START OF GAME
1.0 The user is received by a window with game name and laying out game rules: timer, score system, and how difficulty will increase
1.2 Include that upon clicking "Start Game" the timer will immediately start.
1.3 The window has button with "Start Game". Upon click, window clears and timer starts

#### 2 - GAME PLAY
2.0 User competes against time as they try to match up all pairs within the allotted time while also cognizant of their total click count, and their score
2.1 Score will be on a basis of +10-20 points for a match, and -1 points for exploratory or wrong pairs. 
2.2 Score will not drop below zero since beginning of each round has to involve exploratory clicks
2.3 While playing, user has view of all of their stats: Round #, time left, # of pairs left to complete round, their total score, and total click count

#### 3 - INBETWEEN ROUNDS AND END OF GAME
3.0 Each Round will end when either all cards have been matched or timer runs out (testing start time will be 30s)
3.1 If User beats the timer, they win the round and receive a window that shows their stats. This window marks the end and start of the next round.
3.2 A button "Ready" will indicate User how to start the next round
3.3 If User loses, they will receive window that shows sim. text "Game Over" with final stats
3.4 WIndow will include text "Play Again?" with two buttons: "Yes" and "No"
3.5 "No" button will prompt starter window (point 1.0)
3.6 "Yes" will immediately restart game. Stats will be cleared, Round and difficult will be reset, and timer will begin.

#### 4 - INCREMENTAL DIFFICULTY
4.1 Every 2 or 3 rounds the number of cards to match will be multiplied by 1/2 or 1/3 and timer will be reduced by 5s

## Stretch Goals
* Along with increasing number of cards to match and decreasing time, the graphics on the card also change. 
        * ex: Easy rounds involve matching colors
        * increase difficulty to cards with similar colors and patterns but alternating between different pairs
        * Stroop Effect cards and match word with card that matches the word's meaning, not the text color. -- this would require window inbetween rounds to provide additional instructions of how to match
* Setting a static "Record time" for each round for the User to compete against
* Create a Top Score board (sim. to PacMan) where User can input their 3 letters/numbers. Record stats: Round reached, total score, total clicks
