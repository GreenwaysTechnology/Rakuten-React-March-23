import React from 'react'
import ReactDOM from 'react-dom/client'

const Profile = props => {
    return <div>
        <h3>Id {props.id}</h3>
        <h3>Name {props.name}</h3>
        <h3>Status {props.status ? "Active" : "InActive"}</h3>
    </div>
}
const App = () => {

    return <>
        <h1>Profile Information</h1>
        <Profile id={1} name="Subramanian" status={true} />
        <Profile id={2} name="Karthik" status={true} />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

