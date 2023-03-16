import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'


/**
 * The below component having
 *  =>state declaration
 * =>biz logic
 * =>UI logic
 *  In real time we should isloate biz logic,state into one layer
 *  and UI logic must be in another layer
 */


let nextId = 0;

class Comments extends React.Component {
    state = {
        text: 'default',
        comments: []
    }

    //event object: SyntheticEvent  
    onSetValue = evt => {
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
        return <>
            {/* state as prop  and listener as prop*/}
            <CommentsPage {...this.state} onSetValue={this.onSetValue} onAddComment={this.onAddComment} />
        </>
    }
}

const CommentsPage = props => {
    console.log(props)
    return <div className="container">
        <h1>Comments App</h1>
        <div>
            <h3>Please Share Your Comments</h3>
            <input value={props.text} onChange={props.onSetValue} style={{ padding: 10 }} /><button onClick={props.onAddComment} className="btn btn-success" style={{ margin: 10 }}>Add</button>
            <div>
                <ul>
                    {props.comments.map(comment => {
                        return <li key={comment.id}>
                            {comment.text}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}


const App = () => {
    return <>
        <Comments />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

