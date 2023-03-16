import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

let nextId = 0;
class Comments extends React.Component {
    state = {
        text: '',
        comments: []
    }

    //event object: SyntheticEvent  
    onSetValue = evt => {
        console.log('loading', evt.target.value)
        this.setState(oldState => {
            return { ...oldState, text: evt.target.value }
        })
    }
    onAddComment = evt => {
        this.setState(oldState => {
            let newComment = {
                id: nextId++,
                text: this.state.text
            }
            return { ...oldState, comments: oldState.comments.concat(newComment), text: '' }
        })
    }

    render() {
        console.log('current state ', this.state)
        return <div className="container">
            <h1>Comments App</h1>
            <div>
                <h3>Please Share Your Comments</h3>
                <input value={this.state.text} onChange={this.onSetValue} style={{ padding: 10 }} /><button onClick={this.onAddComment} className="btn btn-success" style={{ margin: 10 }}>Add</button>
                <div>
                    <ul>
                        {this.state.comments.map(comment => {
                            return <li key={comment.id}>
                                {comment.text}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    }
}


const App = () => {
    return <>
        <Comments />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

