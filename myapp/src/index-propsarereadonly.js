import React from 'react'
import ReactDOM from 'react-dom/client'


const Greeting = props => {
    console.log(props)
    //update props 
    //props are read only
    props.name ='foo'
    return <h1>Hello {props.name}</h1>
}
const App = () => {
    return <Greeting name="Subramanian" />  
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

