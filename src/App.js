import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojidict = {
    "🦊": "fox",
    "🦁": "Lion",
    "🦄": "unicorn",
    "🐄": "cow",
    "🐘": "elephant"
  };
  var [input, setinput] = useState("");
  var emojilist = Object.keys(emojidict);

  function inputHandler(event) {
    //console.log(event.target.value)

    var userInput = event.target.value;

    var meaning = emojidict[userInput];
    var e = " ";
    if (meaning === e) {
      meaning = "translation will appear here";
    }
    if (meaning === undefined) {
      meaning = "can't identify emoji ";
    }
    setinput(meaning);
  }

  function emojiclickHandler(item) {
    //console.log("clicked emoji"+item);
    var meaning = emojidict[item];
    setinput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Emoji-Pedia</h1>

      <input
        style={{ minWidth: "80%", padding: "1rem" }}
        onChange={inputHandler}
      ></input>
      <h2> {input}</h2>

      <h2> emojis in our library</h2>
      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
