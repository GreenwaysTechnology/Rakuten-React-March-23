import React from 'react'
import ReactDOM from 'react-dom/client'


const Card = props => <div>
    <h2>{props.size}</h2>
    {props.children}
</div>

const Avatar = props => {
    return <>
        <p>Name : {props.name}</p>
    </>
}
const App = () => {
    return <>
        <Card size="10">
            {/* Passing Component as props */}
            <Avatar name="Subramanian" />
            <Avatar name="Subramanian" />
            <Avatar name="Subramanian" />
        </Card>
        <Card>
            <h1>Hello</h1>
        </Card>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

