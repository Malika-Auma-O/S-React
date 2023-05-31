


export default function Card(props) {

  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
      {/* if open spots is truthy the SOLD OUT in the div element will be rendered, if falsy it will not render it*/}
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.img} alt="z#" />
      <div className="card--stats">
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p> <span className="bold">From {props.price} </span>/ person</p>
      

    </div>
  )
}