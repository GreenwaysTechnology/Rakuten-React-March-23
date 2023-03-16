import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

class Review extends React.Component {
    //state declaration
    state = {
        like: 0, //0 => 1 =>2=>3
        dislike: 0
    }
    //listener 
    onLike = () => {
        //implement pure functions
        this.setState((oldState) => {
            console.log('Old State/Previous State', oldState)
            //must return immutable the state of compoent
            // return {
            //     like: oldState.like + 1,
            //     dislike: oldState.dislike
            // }
            //return Object.assign({}, oldState, { like: oldState.like + 1 })
            return { ...oldState, like: oldState.like + 1 }
        })
    }

    render() {
        console.log('current state ', this.state)
        return <div className="container">
            <h1>Review App- State</h1>
            <h2>Like {this.state.like} Dislike {this.state.dislike}</h2>
            {/* Event binding */}
            <button onClick={this.onLike} className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Like</button>
            {/* inline listener */}
            <button onClick={() => {
                this.setState(oldState => {
                    return { ...oldState, dislike: oldState.dislike + 1 }
                })

            }} className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Dislike</button>
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

