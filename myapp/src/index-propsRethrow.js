import React from 'react'
import ReactDOM from 'react-dom/client'


const Parent = props => {
    return <>
        <h2>Parent Component</h2>
        {/* <Child1 message={props.message} firstName={props.firstName} lastName={props.lastName} /> */}
        {/* Forwarding Props using jsx spread notation */}
        <Child1 {...props} />
    </>
}
const Child1 = props => {
    return <>
        <h2>Child1 Component</h2>
        {/* Forwarding Props using jsx spread notation  and merging new props */}
        <Child2 {...props} title="Child 2" />
    </>
}
const Child2 = props => {
    return <>
        <h2>{props.title} Component</h2>
        <h3>{props.message} {props.firstName} {props.lastName}</h3>
    </>
}

const App = () => {

    return <>
        <Parent message="Hello" firstName="Subramanian" lastName="Murugan" />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

