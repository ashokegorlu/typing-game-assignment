import React, { useState, useEffect } from "react";
import "./index.css";

const TypingPage = () => {
  const keys = "asdfjkl;";
  const keysLength = keys.length;

  const [userInput, setUserInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [accuracy, setAccuracy] = useState("0.00%");

  // Calculate accuracy
  useEffect(() => {
    const calculateAccuracy = () => {
      let correctCount = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === keys[i]) {
          correctCount++;
        }
      }
      const accuracyPercentage = (correctCount / keysLength) * 100;
      const accuracyString = accuracyPercentage.toFixed(2) + "%";
      setAccuracy(accuracyString);
    };

    calculateAccuracy();
  }, [userInput]);

  // Timer
  useEffect(() => {
    let timer;
    if (userInput !== keys) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [userInput]);

  const handleReset = () => {
    setUserInput("");
    setSeconds(0);
    setAccuracy("0.00%");
  };

  return (
    <div className="bg-container">
      <div className="timer">
        {seconds}
        {seconds <= 1 ? " second" : " seconds"}
      </div>
      <h1 className="title">Type the following keys:</h1>
      <p className="keys">{keys}</p>
      <input
        className="user-input"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>Typed Text: {userInput}</p>
      <p className="accuracy">Accuracy: {accuracy}</p>
      {userInput === keys && (
        <>
          <p className="congrats">Congratulations! You typed all the keys.</p>
          <button className="reset-button" type="button" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default TypingPage;
