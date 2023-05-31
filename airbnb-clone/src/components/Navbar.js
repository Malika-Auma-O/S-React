import image from "../images/airbnb-logo.png"

export default function Navbar() {
  return (
      <nav>
          <img className="nav--logo" src={image} alt="logo" />
      </nav>
  )
}