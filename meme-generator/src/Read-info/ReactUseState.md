differences between props and state in react
Props refer to properties passed into a component in order for it to work correctly, just like how functions receive parameters.
A component receiving props is not allowed to modify those props, they are immutable

State is an internal data storage specific to a component.
It represents the mutable values that can change over time and affect the component's behavior and rendering.
Unlike props, state is managed and controlled within the component itself.
State can be initialized in the constructor or using React hooks like useState.
Components can modify their own state using functions like setState or the setter function provided by hooks.
State changes trigger re-rendering of the component to reflect the updated state.
State is local to the component where it is defined and cannot be directly accessed by other components.
State is typically used for managing dynamic data, user input, or component-specific behavior.

function greeting(name) {
const date = new Date()
const hours = date.getHours()

    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    return `Good ${timeOfDay}, ${name}!`

}

console.log(greeting("Bob"))
Her we do not change the value of name in the parameter, but we create other variables in the function to change the time of day greeting

1. How would you describe the concept of "state"?
   A way for React to remember saved values from within a component.
   This is similar to declaring variables from within a component,
   with a few added bonuses

2. When would you want to use props instead of state?
   Anytime you want to pass data into a component so that
   component can determine what will get displayed on the
   screen.

3. When would you want to use state instead of props?
   Anytime you want a component to maintain some values from
   within the component. (And "remember" those values even
   when React re-renders the component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
   Unchanging. Props are immutable. State is mutable.

React.useState is an array.
It has 2 items, the first item is the value that we want to save, like initializing a variable inside a component, and the second item is a function.
We can use result [0] to get the value which is the 1st item in the useState array:

export default function App() {
const result = React.useState("Yes")
console.log(result)
return (

<div className="state">
<h1>{result[0]}</h1>
</div>
)
}

//using array destructuring is even better when using useState. So we first destructure the array we get from useState as a variable, const [myResult, func] .
So we provide the 2 items, the value and the function.
So we immediately pull out the first item in the useState array, which is the value, and destructure into its own variable, here we called it myResult, but it can have any name:
const [myResult, func] = React.useState("Yes")
console.log(myResult)
return (

<div className="state">
<h1>{myResult}</h1>
</div>
)

the second part of use state, which is the function, is used to make changes to the value in the first position of the array.
Normally we do not call it func, we call it set and the name of the value we want to set.
We can run the set function, and whatever value we provide in it will be the new value of state.
We need the state to change whenever something happens on the browser:

const [myResult, setMyResult] = React.useState("Yes")
function handleClick() {
setMyResult("No")
}
return (

<div className="state" onClick={handleClick}>
<h1>{myResult}</h1>
</div>
)

In the above example, if the inside of the div is clicked, myResult in the webpage will change from Yes to No.

<!-- Challenge: Set up state to track our count (initial value is 0) -->
<!-- when the + button is clicked, add 1 to the count, vice versa for the minus button -->
<!-- count++ does not work here because it means count = count + 1. we never modify state directly using = sign -->

export default function App() {
const [count, setCount] = React.useState(0);
function add() {
setCount(count + 1)  
}
let minus = () => setCount(count - 1)
return (

<div>
<button onClick={minus}>–</button>
<h1>{count}</h1>
<button onClick={add}>+</button>
</div>
)
}

The above works but it is not best practice to directly use our count state variable inside of the set state to change the value.
Instead, we provide a callback function inside of the set State as the parameter to our set function, which provides the new value of what we want the state to be.
By default, react will first pass the old value as the parameter in the function, and then we work on that old value, which is a reference for, for example, count, inside the function to update it as we want:
function add() {
setCount(function(previousCount) {
return previousCount + 1
})
}
let minus = () => {
setCount(previousCount => previousCount - 1)
}

 <!-- Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state. -->

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

a. New value of state (setCount(42))
b. Callback function - whatever the callback function
returns === new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?
   Whenever you don't need the previous value of state to determine what the new value of state should be.

3. When would you want to pass the second option (from answer above) to the state setter function?
   Whenever you DO need the previous value to determine the new value

You can also instead use react useState by first calling differently then using it without React.useState
import { useState } from 'react';
function MyButton() {
const [count, setCount] = useState(0);
// ...
}

// create new state, memeImage, with a string link because an empty string here causs errors in console
// const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

you can pass state as a prop, where child component in a different js containing props, like props.number, will be rendered to parent component as a state, like below in app.js parent example:
function Parent(){

   <!-- do stuff -->

const[count, setCount] - React.useState(0)

<!-- return. here count rendered will have state of 0 -->
 <Child number={count}/> 
}

<!-- Raise state up a level to App.js  and pass it down to both the  Header and Body components through props. -->

export default function Header() {
const [user, setUser] = React.useState("Joe")
return (

<header>
<p>Current user: {user}</p>
</header>
)
}
//we move the state to App.js to raise the state up a level:
const [user, setUser] = React.useState("Joe"), then pass the props down to the children header and body
export default function App() {
const [user, setUser] = React.useState("Joe")
return (
<main>
<Header user={user} />
<Body user={user} />
</main>
)
}

export default function Body(props) {
return (

<section>
<h1>Welcome back, {props.user}!</h1>
</section>

export default function Header(props) {
return (

<header>
<p>Current user: {props.user}</p>
</header>
//this allows sharing of state among components. It is recommended to keep state on the component that needs it unless it is to be shared

React.useEffect is used ith sideEffects that live outside of reacts view.eg, localStorage, AP/database, subscriptions with web sockets, syncing 2 different internal states

UseEffect has one required parameter,a callback function where we put our side effects code, like a fetch request, and an optional parameter, called dependencies array, that contains array of dependencies/values which tells effect when to run again if any dependency changes. If no deps are provided, meaning an empty array,effect runs only once at mount time.

below count is the number in use state and updates accordignly

React.useEffect( function () {
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response)=> response.json())
.then((data)=>{})
},[count])

1. What is a "side effect" in React? What are some examples?

- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data,
  render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the effect function?

- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

4. How would you explain what the "dependecies array" is?

- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function or not.

<!-- useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */ -->

React.useEffect(() => {
async function getMemes() {
const res = await fetch("https://api.imgflip.com/get_memes")
const data = await res.json()
setAllMemes(data.data.memes)
}
getMemes()
}, [])
