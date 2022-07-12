import React, {useState, useEffect} from "react"

function App() {
    
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isGameRunning, setIsGameRunning] = useState(false);
  

  /*useEffect(() => {
    const timeoutID = setTimeout(() => setTimeRemained(prevTime => prevTime - 1), 1000);
    if (timeRemained === 0) {
      clearTimeout(timeoutID)
    }
  }, [timeRemained]);
  */
  
  useEffect(() => {
    if (isGameRunning === true && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining(prevTime => prevTime - 1), 1000)
     
    } else if (timeRemaining === 0) {
      setIsGameRunning(false)
    }
    console.log(isGameRunning);
  }
    ,[timeRemaining, isGameRunning])
    

    function changeText(event) {
        setText(event.target.value);
    }
  
  
  
  function countWords(text) {
    const wordsArray = text.trim().split(" ").filter(el => el !== "");
    console.log(wordsArray.length);
  }

  function startGame() {
    setIsGameRunning(true)
  }
    
    //console.log(text);
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} name="textarea" onChange={changeText} />
            <h4>Time remainng: {timeRemaining}</h4>
            <button onClick={startGame}>Start</button>
        <h1>Word count: ???</h1>
        </div>
    )
}

export default App
