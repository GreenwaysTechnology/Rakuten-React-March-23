//component creational patterns
import React from 'react'
import ReactDOM from 'react-dom/client'

//functions pattern 
// function Heading(){
//     return <h1>Hello React</h1>
// }
//es 6 arrow functions 
// const Heading = () => {
//     return <h1>Hello React!</h1>
// }
const Heading = () => <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading></Heading>)

