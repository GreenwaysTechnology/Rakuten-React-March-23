import React from 'react'
import ReactDOM from 'react-dom/client'


const Parent = props => {
    return <>
       <h2>Parent Component</h2>
       <Child1 message={props.message} />
    </>
}
const Child1 = props => {
    return <>
       <h2>Child1 Component</h2>
       <Child2 message={props.message} />
    </>
}
const Child2 = props => {
    return <>
       <h2>Child2 Component</h2>
       <h3>Message : {props.message}</h3>
    </>
}

const App = () => {

    return <>
        <Parent message="hello" />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

