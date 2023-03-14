import React from 'react'
import ReactDOM from 'react-dom/client'

//here props is just conventional variable name 
// function Greeting(props) {
//     console.log(props)
//     return <h1>Hello {props.name}</h1>
// }

const Greeting = props => {
    console.log(props)
    return <h1>Hello {props.name}</h1>
}
const App = () => {
    //imperative syntax
    //return Greeting('Subramanian')
    //declarative syntax
    //props or property syntax <Greeting propName="Value" />
    return <Greeting name="Subramanian" />  // => Greeting('Subramanian)
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

