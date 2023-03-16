import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

class Review extends React.Component {
    //state declaration
    state = {
        like: 0,
        dislike: 0
    }
    render() {
        console.log('state ', this.state)
        return <div className="container">
            <h1>Review App- State</h1>
            <h2>Like {this.state.like} Dislike {this.state.dislike}</h2>
        </div>
    }
}


const App = () => {
    return <>
        <Review />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

