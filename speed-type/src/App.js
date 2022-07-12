import React from "react"

function App() {
    
    const [text, setText] = React.useState("");
    
    function changeText(event) {
        setText(event.target.value);
    }
    
    //console.log(text);
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} name="textarea" onChange={changeText} />
            <h4>Time reminaing: ???</h4>
            <button>Start</button>
        <h1>Word count: ???</h1>
        </div>
    )
}

export default App
