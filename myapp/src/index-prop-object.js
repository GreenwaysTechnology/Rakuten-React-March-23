import React from 'react'
import ReactDOM from 'react-dom/client'

// const Profile = props => {
//     return <div>
//         <h3>Id {props.profile.id}</h3>
//         <h3>Name {props.profile.name}</h3>
//         <h3>Status {props.profile.status ? "Active" : "InActive"}</h3>
//     </div>
// }

const Profile = props => {
    const { id, name, status, address: { city } } = props.profile
    return <div>
        <h3>Id {id}</h3>
        <h3>Name {name}</h3>
        <h3>City {city}</h3>
        <h3>Status {status ? "Active" : "InActive"}</h3>
    </div>
}
//default Props
Profile.defaultProps = {
    profile: {
        id: 0,
        name: 'default',
        status: false,
        address: {
            city: 'city'
        }
    }
}
const App = () => {

    let profile = {
        id: 1,
        name: 'Subramanian',
        status: true,
        address: {
            city: 'Coimbatore'
        }
    }

    return <>
        <h1>Profile Information</h1>
        <Profile profile={profile} />
        <Profile/>

    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

