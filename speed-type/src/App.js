import React from "react"

function App() {
    
    const [text, setText] = React.useState("");
    
    function changeText(event) {
        setText(event.target.value);
    }
  
  function countWords(text) {
    const wordsArray = text.trim().split(" ").filter(el => el != "");
    console.log(wordsArray.length);
  }
    
    //console.log(text);
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} name="textarea" onChange={changeText} />
            <h4>Time reminaing: ???</h4>
            <button onClick={() => countWords(text)}>Start</button>
        <h1>Word count: ???</h1>
        </div>
    )
}

export default App
