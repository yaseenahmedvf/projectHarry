import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleLoClick = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        {/* <button className="btn btn-warning mx-2 my-2" onClick={speak}>
          Speak
        </button> */}
      </div>
      <div className="container my-3"style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((elem) => {return elem.length !== 0}).length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
