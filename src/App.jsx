import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  function handleClick() {
    console.log("I was clicked!");
  }

  function handleOnMouseOver() {
    console.log("MouseOver");
  }

  /**
   * Challenge:
   * Log something to the console when the mouse hovers over the image
   */

  return (
    <div className="container">
      <img
        src="https://picsum.photos/640/360"
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
