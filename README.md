# Typing Game

This is a simple typing game built with React. The game challenges the user to type a specific set of keys within a given time. It calculates the typing accuracy and provides feedback to the user.

![typing image](../chaabi-assignment-image.png)

## Features

- Timer: The game starts with a timer that counts the seconds elapsed since the start of typing.
- Accuracy Calculation: It calculates the accuracy of the user's typing based on the correct keys typed compared to the total number of keys.
- Congratulatory Message: When the user types all the keys correctly, a congratulatory message is displayed.
- Reset: The user can reset the game to start again.

## Usage

**To use the application, follow these steps:**
Clone this repository to your local machine.
Navigate to the project directory. cd typing-web-app
Install the dependencies using npm. npm install
Start the development server. npm start

1. The game starts with a set of keys displayed on the screen.
2. Type the keys in the input field as accurately and quickly as possible.
3. The timer will start counting the seconds as soon as you start typing.
4. The accuracy of your typing will be displayed as a percentage.
5. If you type all the keys correctly, a congratulatory message will be shown.
6. Click the "Reset" button to start a new game.

Open your browser and go to http://localhost:3000 to view the touch typing application.

## Customization

You can customize the game by modifying the following variables in the `TypingPage` component:

- `keys`: The set of keys that the user needs to type.
- `keysLength`: The total number of keys in the set.

Feel free to make changes to the code to suit your requirements and preferences.
