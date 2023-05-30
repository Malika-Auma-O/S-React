import logo from '../logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <img className="logo" src={logo} alt="logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}