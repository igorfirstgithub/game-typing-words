import React, { useState, useEffect, useRef } from "react";

function App() {
  const INTERVAL = 10;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(INTERVAL);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [numWords, setNumWords] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (isGameRunning === true && timeRemaining > 0) {
      setTimeout(
        () =>
          setTimeRemaining((prevTime) => {
            setNumWords(countWords(text));
            return prevTime - 0.25;
          }),
        250
      );
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
    setIsGameRunning(true);
    setNumWords(0);
    setTimeRemaining(INTERVAL);
    setText("");
    ref.current.disabled = false;
    ref.current.focus();
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!isGameRunning}
        value={text}
        name="textarea"
        onChange={changeText}
        ref={ref}
      />
      <h4>Time remaining: {timeRemaining.toFixed(0)}</h4>
      <button disabled={isGameRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {numWords}</h1>
    </div>
  );
}

export default App;
