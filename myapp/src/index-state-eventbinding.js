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
    //listener 
    onLike = () => {
        //write biz logic to increment likes
        console.log('onLike')
    }

    render() {
        console.log('state ', this.state)
        return <div className="container">
            <h1>Review App- State</h1>
            <h2>Like {this.state.like} Dislike {this.state.dislike}</h2>
            {/* Event binding */}
            <button onClick={this.onLike} className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Like</button>
            <button className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Dislike</button>
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

