
import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <img className="nav-logo" src={trollFace} alt="logo" />
        <h2 className="nav-title">Meme Generator</h2>
      </div>

      <h3>React Course - Project 3</h3>
    </div>
  )
}