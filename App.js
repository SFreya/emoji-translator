import React, { useState } from "react";

import "./styles.css";

var emojiDictionary = {
  "❤️": "love",
  "😑": "annoyance",
  "🤐": "Zipper-Mouth Face",
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "😪": "sleepy face",
  "😵": "Dizzy face",
  "🥳": "Partying face",
  "🤓": "Nerd face"
};

var emojisInDatabase = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops! Meaning not Found";
    }
    setMeaning(meaning);

    console.log(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>Emojis we Know</h3>
      <div style={{ width: "30%", margin: "auto", minWidth: "250px" }}>
        {emojisInDatabase.map((emoji) => {
          return (
            <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
