import React, { useState } from "react";
import "../Game/Game.css";
import { evaluate } from "mathjs";
function Game() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const output = evaluate(input);
        setResult(output.toString());
      } catch (error) {
        setResult("error");
      }
    } else if (value === "c") {
      setInput("");
      setResult("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "c",
    "⌫",
  ];

  return (
    <>
    <div className="head">
        <h1>CALCULATOR</h1>
    </div>
      <div className="Calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button key={index} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
