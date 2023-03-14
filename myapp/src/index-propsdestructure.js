import React from 'react'
import ReactDOM from 'react-dom/client'

//Extract props from the Property object and display
// const Profile = props => {
//     const { id, name, status } = props;
//     return <div>
//         <h3>Id {id}</h3>
//         <h3>Name {name}</h3>
//         <h3>Status {status ? "Active" : "InActive"}</h3>
//     </div>
// }

// const Profile = ({ id, name, status }) => {
//     return <div>
//         <h3>Id {id}</h3>
//         <h3>Name {name}</h3>
//         <h3>Status {status ? "Active" : "InActive"}</h3>
//     </div>
// }

const Profile = ({ id, name, status }) => <div>
    <h3>Id {id}</h3>
    <h3>Name {name}</h3>
    <h3>Status {status ? "Active" : "InActive"}</h3>
</div>

const App = () => {

    return <>
        <h1>Profile Information</h1>
        <Profile id={1} name="Subramanian" status={true} />
        <Profile id={2} name="Karthik" status={true} />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

