//component creational patterns
import React from 'react'
import ReactDOM from 'react-dom/client'


//jsx rule 1: every opened element must be closed.
const Greeting = ()=> {
    //return <h1>Hello  //=> <h1>Hello</h1>
    //return <img src="" //=> <img src=""/>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting></Greeting>)

