export default function App() {
/\*\*
_ Challenge: Replace the if/else below with a ternary
_ to determine the text that should display on the page
\*/
const isGoingOut = true;

    let answer  // Use ternary here
    isGoingOut === true ? answer = "Yes" : answer = "No";

return (

  <div className="state">
  <h1 className="state--title">Do I feel like going out tonight?</h1>
  <div className="state--value">
  <h1>{answer}</h1>
            </div>
        </div>
    )
}

<!-- better -->

let answer = isGoingOut ? "Yes" : "No";

<!-- best . remove answer variable-->
<div className="state--value">
<h1>{isGoingOut ? "Yes" : "No"}</h1>
</div>

import React from "react"

export default function App() {
/\*\*
_ Challenge:
_ - Initialize state for `isGoingOut` as a boolean
_ - Make it so clicking the div.state--value flips that
_ boolean value (true -> false, false -> true)
_ - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
_/

     const [isGoingOut, setIsGoingOut] = React.useState(true)

function changeMind() {
setIsGoingOut(prevState => prevState ? false : true)
}

    return (

  <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}

function App() {
/\*\*
_ Challenge: See if you can do it all again by yourself :)
_/
const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    const thingsElements = thingsArray.map((thing) => {
        return <p key={thing}>{thing}</p>
    } )

<!-- use spread operator -->

    function addItem() {
        setThingsArray((prevState) => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )

}
