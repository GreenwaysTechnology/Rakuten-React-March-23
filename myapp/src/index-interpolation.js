import React from 'react'
import ReactDOM from 'react-dom/client'


//data binding {}
let name = 'Subramanian Murugan'
const Heading = () => <h1>Hello {name}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading></Heading>)

