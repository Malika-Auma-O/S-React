import star from "../images/star.png"


export default function Card(props) {
  console.log(props)

  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
      {/* if open spots is truthy the SOLD OUT in the div element will be rendered, if falsy it will not render it*/}
      {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {/* add item to each element since we only have item in Apps.js */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.coverImg} alt="z#" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="#" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p> <span className="bold">From {props.item.price} </span>/ person</p>
      

    </div>
  )
}