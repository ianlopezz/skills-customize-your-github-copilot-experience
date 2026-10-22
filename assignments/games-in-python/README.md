
# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build a Hangman game in Python to practice strings, loops, conditionals, random selection, and user input. Players guess letters to reveal a hidden word before they run out of attempts.

## 📝 Tasks

### 🛠️ Create the Hangman Game

#### Description
Write a program that selects a hidden word and lets the player guess its letters. Show the word's progress after each guess and keep track of incorrect guesses.

#### Requirements
Completed program should:

- Select a word at random from a predefined list.
- Display each unrevealed letter as an underscore and reveal correctly guessed letters in their positions.
- Accept one letter guess at a time and update the displayed progress.
- Track and display the number of incorrect attempts remaining.

### 🛠️ Handle Guesses and Game Outcomes

#### Description
Validate the player's guesses and end the game when the player either guesses the word or runs out of attempts.

#### Requirements
Completed program should:

- Reject or handle guesses that are not a single letter.
- Avoid counting a repeated guess as a new incorrect guess.
- End the game when all letters in the word have been guessed or no attempts remain.
- Display a clear win or loss message and reveal the word when the player loses.
