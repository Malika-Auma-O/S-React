
// import memesData from "../memesData"
import React from "react";

export default function Meme() {
 
  // save meme related data as an object with 3 properties
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  // create a new state variable for all meme images defaulting to memes data
  const [allMemes, setAllMemes] = React.useState([]);

  // make API call as soon as Meme component loads
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

  // when function is called generate random meme image from meme url as src of our memeImage state
  function randomImage() {
    const random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[random].url
    setMeme(prevMeme => {
      return { ...prevMeme, randomImage: url}
    })
}


// handle change on input field
function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
}


  return (
    <div>
      <main>
      <div className="meme-form" action="#">

        <input 
        type="text" 
        id="input1" 
        placeholder="Top text"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />

        <input 
        type="text" 
        id="input2" 
        placeholder="Bottom text"
        name="bottomText" 
        value={meme.bottomText}
        onChange={handleChange}
        />

        <br />
        <button 
        onClick={randomImage} 
        className="meme-btn">
          Get a new meme image  🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

      </main>
    </div>
  )
}