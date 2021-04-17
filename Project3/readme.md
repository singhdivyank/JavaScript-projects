# User Interface
![](https://github.com/singhdivyank/JavaScript-projects/blob/main/Project3/UI.png)

A very easy game of dice roll between two players taking chances at rolling the dice. A number is obtained on rolling the dice which gets added to the player's score. The first player to reach 100 is the winner

# Declaring the winner
![](https://github.com/singhdivyank/JavaScript-projects/blob/main/Project3/Winner.png)

**However the game is not so simple**. Wondering why? A dice roll of 1 makes this game interesting-
1. On a dice roll of 1, the other player gains control of the dice
2. On a dice roll of 1, the player's instantaneous score gets lost

## Individual components
1. Roll dice- randomly generates a number between 1 and 6
2. Hold- 
    
    a. Adds the players score to current score
    
    b. Sets score to 0
    
    c. Transfers dice control to next player
3. New game- Resets the entire UI and sets score, current score to 0

**Describing the gameplay is difficult. It is advisable to understand the game by [playing](https://singhdivyank.github.io/dice-game/) it. However an algorithm describing the workflow is given below.**

# Game Algorithm
![](https://github.com/singhdivyank/JavaScript-projects/blob/main/Project3/pig-game-flowchart.png)
