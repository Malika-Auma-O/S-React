
import memesData from "../memesData"
import React from "react";

let url;

export default function Meme() {
  // create new state, memeImage, with empty string
  const [memeImage, setMemeImage] = React.useState("")

  // when function is called generate random meme image from meme url as src of our memeImage state
  function randomImage() {
    const array = memesData.data.memes;
    const random = Math.floor(Math.random() * array.length);
    url = array[random].url;
    setMemeImage(url)
}

  return (
    <div>
      <main>
      <div className="meme-form" action="#">
        <input type="text" name="input1" id="input1" placeholder="Top text"/>
        <input type="text" name="input2" id="input2" placeholder="Bottom text"/>
        <br />
        <button onClick={randomImage} className="meme-btn">Get a new meme image  🖼</button>
      </div>
      <img className="meme-image" src={memeImage} alt="meme img" />

      </main>
      
    </div>
  )
}