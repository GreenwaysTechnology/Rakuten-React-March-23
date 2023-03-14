import React from 'react'
import ReactDOM from 'react-dom/client'

// class Profile extends React.Component {
//     render() {
//         return <div>
//             <h3>Id {this.props.id}</h3>
//             <h3>Name {this.props.name}</h3>
//             <h3>Status {this.props.status ? "Active" : "InActive"}</h3>
//         </div>
//     }
// }
class Profile extends React.Component {
    render() {
        const { id, name, status } = this.props
        return <div>
            <h3>Id {id}</h3>
            <h3>Name {name}</h3>
            <h3>Status {status ? "Active" : "InActive"}</h3>
        </div>
    }
}
//default Props
Profile.defaultProps = {
    id: 0,
    name: 'default',
    status: false
}

const App = () => {
    return <>
        <h1>Profile Information</h1>
        <Profile id={1} name="Subramanian" status={true} />
        <Profile id={2} name="Karthik" status={true} />
        <Profile />
        <Profile name="Ram" />

    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

