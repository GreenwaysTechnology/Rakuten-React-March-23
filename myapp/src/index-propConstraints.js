import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';

const Profile = props => {
    return <div>
        <h3>Id {props.id}</h3>
        <h3>Name {props.name}</h3>
        <h3>Status {props.status ? "Active" : "InActive"}</h3>
    </div>
}
//property Rules
Profile.propTypes = {
    id: PropTypes.number,
    name:PropTypes.string,
    status:PropTypes.bool
}
//default props
Profile.defultProps = {
    id:0,
    name:'default Name',
    status:false
}

const App = () => {

    return <>
        <h1>Profile Information</h1>
        {/* <Profile id={"1"} name="Subramanian" status={true} /> */}
        <Profile id={1} name="Subramanian" status={true} />
        <Profile />

    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

