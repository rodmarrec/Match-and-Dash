# Match-and-Dash-Game
## MVP
Taking the traditional concentration card game, also known as memory, and making it more challenging by adding a timer for the player to compete against. In each round the number of pairs needed to win the round will increase, adding pressure to the player as they hurry to match up cards and dash against time.

## WIREFRAME

#### START GAME
![Start Game](https://i.imgur.com/wpYkFyk.jpg)

#### GAME PLAY
![Game Play](https://i.imgur.com/PojMMIl.jpg)

#### END OF ROUND
![End of Round](https://i.imgur.com/i5IMpR7.jpg)

#### END OF GAME
![End of Game](https://i.imgur.com/FKNQXof.jpg)

## USER STORY
#### 1.0 - START OF GAME
1. The user is received by a window with game name and laying out game rules: timer, score system, and how difficulty will increase
2. Include that upon clicking "Start Game" the timer will immediately start.
3. The window has button with "Start Game". Upon click, window clears and timer and round 1 begin

#### 2.0 - GAME PLAY
1. User competes against time as they try to match up all pairs within the allotted time while also cognizant of their total click count, and their score
2. Score will be on a basis of +10-20 points for a match, and -1 points for exploratory clicks or wrong pairs. 
3. Score will not drop below zero since beginning of each round has to involve exploratory clicks
4. While playing, user has view of all of their stats: Round #, time left, # of pairs left to complete round, their total score, and total click count

#### 3.0 - INBETWEEN ROUNDS AND END OF GAME
1. Each Round will end when either all cards have been matched or timer runs out (testing start time will be 30s)
2. If User beats the timer, they win the round and receive a window that shows their stats. This window marks the end and start of the next round.
3. A button "Ready" will indicate User how to start the next round
4. If User loses, they will receive window that shows sim. text "Game Over" with final stats
5. Window will include text "Play Again?" with two buttons: "Yes" and "No"
6. "No" button will prompt starter window (point 1.1)
7. "Yes" will immediately restart game. Stats will be cleared, Round and difficult will be reset, and timer will begin.

#### 4.0 - INCREMENTAL DIFFICULTY
1. Every 3 rounds the number of cards to match will be multiplied by 1/2 and timer will be reduced by 5s

## Stretch Goals
* As Round # increases the graphics on the card also change. Changing the User's expectations of what they need to match. 
* Idea 1: Easy rounds involve matching colors
* Idea 2: increase difficulty to cards by using similar colors and patterns but placing colors in different places. A card divided into 4 squares where diagonals alternate colors and another pair have same colors but in opposite boxes.
* Idea 3: Stroop Effect cards and match word with card that matches the word's meaning, not the text color. -- this would require window inbetween rounds to provide additional instructions of how to match
* As card graphics get harder to match, more time might need to be given in higher rounds. Would need more than one timer function to match difficulty level
* Setting a static "Record time" for each round for the User to compete against
* Create a Top Score board (sim. to PacMan) where User can input their 3 letters/numbers. Record stats: Round reached, total score, total clicks
* Top Score would encourage sharing game with friends and family
