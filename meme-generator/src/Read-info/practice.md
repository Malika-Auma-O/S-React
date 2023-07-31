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

import React from "react"

export default function App() {
const [contact, setContact] = React.useState({
firstName: "John",
lastName: "Doe",
phone: "+1 (719) 555-1212",
email: "itsmyrealname@example.com",
isFavorite: true
})

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => {

<!-- return the prevContacts object using spread operator in with all porperties, and change where the isFavorite property is the opposite of the prevContacts isFavorite to toggle-->

            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

 <!-- /surround the object we are returning in parenthesis if wewabt tivreturn an iobject instead-->

       function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }


    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img
                        src={`../images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )

}

/\*\*
_ Challenge:
_ - Create a new component named Count
_ - It should receive a prop called `number`, whose value
_ is the current value of our count
_ - Have the component render the whole div.counter--count
_ and display the incoming prop `number`
_ - Replace the div.counter--count below with an instance of
_ the new Count component

<!-- inside count.js -->

     export default function Count(props){
        <h1>{props.number}</h1>
    }

<!-- app.js -->

    export default function App() {
    const [count, setCount] = React.useState(0)

        function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
    }




    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

export default function App() {
const [contact, setContact] = React.useState({
firstName: "John",
lastName: "Doe",
phone: "+1 (719) 555-1212",
email: "itsmyrealname@example.com",
isFavorite: false
})

let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

in App.js, create our state. then create our toggle function that onClick will change the value of the clicked element. We pass it into a custom component in a custom prop called handleClick
In the Child Star component, it is receiving props and registering a real eventListener onClick whose functional value is the value we receive through props.handleClick

<!-- in the child Star.js, we fill in the props instead of contacts.isFavorite , for the image we add the actual onClick method and pass props.handleClick to be used in Parent Component to make changes-->

export default function Star(props) {
const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
return (
<img
src={`../images/${starIcon}`}
className="card--favorite"
onClick={props.handleClick}
/>
)
}

  <!-- In App.js render the child Star component with isFilled prop with the value of contact.isFavorite, and a custom onclick prop like handleClick and pass in the actual function for toggling inside it -->
  <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}>

<!-- boxes.js -->

port default [
{ id: 1,on: true },
{ id: 2, on: false},
{ id: 3, on: true},
]

import React from "react"
import boxes from "./boxes"

export default function App() {
/\*\*
_ Challenge part 1:
_ 1. Initialize state with the default value of the
_ array pulled in from boxes.js
_ 2. Map over that state array and display each one
_ as an empty square (black border, transparent bg color)
_/
const [squares, setSquares] = React.useState(boxes)
const squareElements = squares.map(square => (

<div className="box" key={square.id}></div>
))

    return (
        <main>
            <h1>Boxes will go here</h1>
        </main>
    )

<!-- style the boxes in css -->

.box {
height: 100px;
width: 100px;
border: 1px solid black;
display: inline-block;
margin-right: 4px;
}

export default function App() {
const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={() => toggle}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )

}

export default function Joke(props) {
const [isShown, setIsShown] = React.useState(false)

<!-- /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     Only display the punchline paragraph if `isShown` is true
     */ -->

function toggleShown(){

<!-- this returns the opposite of prevShown from true  to false and vice versa -->

        setIsShown(prevShown => !prevShown)
    }
    return (

 <div>
 <!-- here condition is if props is empty, dont show this paragraph, or only show it if both are truthy -->
 {props.setup && <h3>{props.setup}</h3>}
 <!-- if is shown is true and paragraph, this will show the paragraph only if iShown is toggled to true so  both conditions are truthy. by default the state isfalse-->
 {isShown && <p>{props.punchline}</p>}
 <button onClick={toggleShown}>Show Punchline</button>
            <hr />
</div>
    )
}
<!-- we can have 2 buttons that switch between show and hide if isShown is true or false-->
<div>
{props.setup && <h3>{props.setup}</h3>}
{isShown && <p>{props.punchline}</p>}
{isShown && <button onClick={toggleShown}>Hide Punchline</button>}
{!isShown && <button onClick={toggleShown}>Show Punchline</button>}
<hr />
</div>

<!-- We can simply use ternary on the same button -->
<!-- if isSown is true, hide punchline esle show the punchline -->

<button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>

<!-- if condition 1 and condition 2 are both truthy then code will run -->

const cond1 = true
const cond2 = true
if(cond1 && cond2) {
// this code will run
}

export default function App() {
const [messages, setMessages] = React.useState(["a", "b"])

return (

<div>
<!--  Only display the <h1> below if there are unread messages -->
{messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
</div>
)
}

<!-- - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular) -->

let message;  
 if (messages.length > 0 && messages.length === 1) {
message = `You have ${messages.length} unread message`
} else if (messages.length > 1) {
message = `You have ${messages.length} unread messages`
} else {
message = "You're all caught up!";
}

    return (
        <div>
         <p>{message}</p>
        </div>
    )

<!-- react better way in the react and using ternary -->
<div>
{messages.length === 0 ?
<h1>You're all caught up!</h1> :
<h1>You have {messages.length} unread 
{messages.length > 1 ? "messages" : "message"}</h1>
            }
        </div>

1. What is "conditional rendering"?
   When we want to only sometimes display something on the page
   based on a condition of some sort

2. When would you use &&?
   When you want to either display something or NOT display it

3. When would you use a ternary?
   When you need to decide which thing among 2 options to display

4. What if you need to decide between > 2 options on
   what to display?
   Use an `if...else if... else` conditional or a `switch` statement

FORMS IN REACT
export default function Form() {
const [firstName, setFirstName] = React.useState("")

    console.log(firstName)

    function handleChange(event) {
        console.log(event.target.value)

 <!-- Challenge: update the firstName state on every keystroke -->

        setFirstName(event.target.value)

<!-- Challenge: Track the applicant's last name as well
we could duplicate the above or use a different method-->
<!-- save state to an object instead of an empty string -->
<!-- after creating a state, to distinguish which input triggered a change, we will give each input a name property which matches the property name we are saving the state in, for example the firstName property will name its input to firstName-->

const [formData, setFormData] = React.useState(
{firstName: "", lastName: ""}
)

    console.log(formData)

<!-- handleChange function will change the previous form and update with the form spread out and the event target value. we maintain the event target name as is but put it in square brackets to avoid error since it is not a string -->

function handleChange(event) {
setFormData(prevFormData => {
return {
...prevFormData,
[event.target.name]: event.target.value
}
})
}

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>

<!-- we need to add a value property to each input field  {formdata.firstName} etc this is to do with controlled components error in react
the value of the input field should be equal ot the state that represents that input value
text are component in react is sself closing
-->

const [formData, setFormData] = React.useState(
{firstName: "", lastName: "", email: "", comments: "", isFriendly: true}
)

<form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
<!-- we use boolean here. to check if checked or not -->
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
        </form>

<!-- we need to modify our handleChange function becasue of the checked as it has no value we look for checked
we need to not put event.target.value in the form data in the function. destructure the event.target and pull out what we need
we will have, name value, type and checked property here
use ternanry to know type of value to hcoose what to use
-->,

function handleChange(event) {
const {name, value, type, checked} = event.target
setFormData(prevFormData => {
return {
...prevFormData,
[name]: type === "checkbox" ? checked : value
}
})
}

<!-- checkbox use booleans but radio inputs use empty string.
So when a user clikcs an ipunt we watch for chages then take the value of the radio button that was clicked and set our state to that value
All radios should have the same name so htey are not clicked together, but each should have a unique value which will be used as state when clicked
-->
 <fieldset>
 <legend>Current employment status</legend>
     <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed
<!-we cannot use boolean to check, we check with the checked and string -->
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
<input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
 <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

<!-- we also update the state to include the radio and select below -->

const [formData, setFormData] = React.useState(
{
firstName: "",
lastName: "",
email: "",
comments: "",
isFriendly: true,
employment: "",
favColor: ""
}
)

<select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >

<option value="">-- Choose --</option>
<option value="red">Red</option>
<option value="orange">Orange</option>
<option value="yellow">Yellow</option>
<option value="green">Green</option>
<option value="blue">Blue</option>
<option value="indigo">Indigo</option>
<option value="violet">Violet</option>
</select

<!-- submit button inside a form acts like a submit for the data and the type is by default submit so no need to add type-->
<!-- <form method="POST" action="somePhp.php"> is an old way for the form. to bypass that system we use onsubmit handler function
the function can directly submit to our API our form data
use even.prevent default on the function to prevent refresh page
 -->

function handleSubmit(event) {
event.preventDefault()
// submitToApi(formData)
console.log(formData)
}

return (

<form onSubmit={handleSubmit}>
)

1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
   Right before the form is submitted.

2. In a React app, when do you gather all the data from
   the filled-out form?
   As the form is being filled out. The data is all held in local state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
   `name` property.

4. What's different about saving the data from a checkbox element
   vs. other form elements?
   A checkbox uses the `checked` property to determine what should
   be saved in state. Other form elements use the `value` property instead.

5. How do you watch for a form submit? How can you trigger
   a form submit?

- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.

<!-- Challenge: Connect the form to local state
     *
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console. -->

     import React from "react"

export default function App() {
const [formData, setFormData] = React.useState({
email: "",
password: "",
passwordConfirm: "",
joinedNewsletter: true
})

<!-- /**
     * Challenge: Connect the form to local state
     *
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords do not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */ -->

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")

<!-- we use return here to ensure i passwords do not match no need to log tha thank you for submitting to news letter -->

            return
        }

        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

return (

<div className="form-container">
<form className="form" onSubmit={handleSubmit}>
<input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
<input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
<input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />

<div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

import React from "react"

export default function App() {
const [starWarsData, setStarWarsData] = React.useState({})
const [count, setCount] = React.useState(1)

<!-- /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */ -->

React.useEffect(function() {
console.log("Effect ran")
fetch(`https://swapi.dev/api/people/${count}`)
.then(res => res.json())
.then(data => setStarWarsData(data))
}, [count])
return (

<div>
<h2>The count is {count}</h2>
<button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
</div>
)
}

export default function App() {
/\*\*
_ Challenge:
_ 1. Create state called `show`, default to `true`
_ 2. When the button is clicked, toggle `show`
_ 3. Only display `<WindowTracker>` if `show` is `true`
\*/

const [show, setShow] = React.useState(true);

function handleClick() {
setShow((prevShow) => {
return !prevShow
})
}

return (

<div className="container">
<button onClick={handleClick}
            >
Toggle WindowTracker
</button>
{show && <WindowTracker />}
</div>
)
}

import React from "react"

export default function WindowTracker() {
const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

<!-- /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */ -->

<!-- clean up any side effects using window.remvoe evemtlistener-->

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

return (

<h1>Window width: {windowWidth}</h1>
)
}

React.useEffect(() => {
async function getMemes() {
const res = await fetch("https://api.imgflip.com/get_memes")
const data = await res.json()
setAllMemes(data.data.memes)
}
getMemes()
}, [])
