import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  const [name, setName] = useState("");

  const [headingText, setHeadingText] = useState("Guest");

  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault;
  }

  return (
    <form onSubmit={handleClick}>
      <div className="container">
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "whitesmoke" : "bisque" }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
