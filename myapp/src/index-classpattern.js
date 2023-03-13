//component creational patterns
import React from 'react'
import ReactDOM from 'react-dom/client'

//es 6 class Pattern
class Heading extends React.Component {
    //override render method to return react element
    render() {
        return <h1>Hello React!</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading></Heading>)

