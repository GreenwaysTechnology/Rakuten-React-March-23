import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'


class Todo extends React.Component {
    state = {
        todos: []
    }
    async componentDidMount() {
        //api calls
        const url = 'https://jsonplaceholder.typicode.com/todos'
        try {
            const todos = await (await fetch(url)).json()
            this.setState(oldState=>{
                return {...oldState, todos:oldState.todos.concat(todos)}
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return <>
            <h1>Todo App - WebService Integration</h1>
            <ul>
                {this.state.todos.map(todo => {
                    return <li key={todo.id}>
                        <span>{todo.title}</span>
                    </li>
                })}
            </ul>
        </>
    }
}


const App = () => {
    return <div className="container">
        <Todo />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

