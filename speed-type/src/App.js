import React, { useState, useEffect } from "react";

function App() {
  const INTERVAL = 10;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(INTERVAL);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [numWords, setNumWords] = useState(0);

  useEffect(() => {
    if (isGameRunning === true && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining((prevTime) => prevTime - 1), 1000);
    } else if (timeRemaining === 0) {
      setIsGameRunning(false);
      setNumWords(countWords(text));
    }
  }, [timeRemaining, isGameRunning]);

  function changeText(event) {
    setText(event.target.value);
  }

  function countWords(text) {
    const wordsArray = text
      .trim()
      .split(" ")
      .filter((el) => el !== "");
    return wordsArray.length;
  }

  function startGame() {
    // if (isGameRunning === false) {
    setIsGameRunning(true);
    setNumWords(0);
    setTimeRemaining(INTERVAL);
    setText("");
    // }
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!isGameRunning}
        value={text}
        name="textarea"
        onChange={changeText}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isGameRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {numWords}</h1>
    </div>
  );
}

export default App;
