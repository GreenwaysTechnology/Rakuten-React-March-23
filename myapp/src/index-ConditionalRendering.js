import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'


const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}

const TodoList = props => {
    const { todos } = props
    return <ul className="list-group">
        {todos.map((todo, index) => (
            <li key={index}  style={{listStyle:'none'}} >
                <span style={{margin:10}}>
                    {todo.id}
                </span>
                <span>
                    {todo.title}
                </span>
            </li>
        ))}
    </ul>
}

class Todo extends React.Component {
    state = {
        isLoaded: false, //spinner status
        todos: [], //data,
        error: null
    }
    async componentDidMount() {
        //api calls
        const url = 'https://jsonplaceholder.typicode.com/todos'
        try {
            const todos = await (await fetch(url)).json()
            this.setState(oldState => {
                return { ...oldState, isLoaded: true, todos: oldState.todos.concat(todos) }
            })
        }
        catch (err) {
            console.log(err)
            this.setState(oldState => {
                return { ...oldState, isLoaded: true, err: err }
            })
        }
    }
    render() {
        const { error, isLoaded, todos } = this.state;
        //conditional Rendering
        if (error) {
            return <Error error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <TodoList todos={todos} />
        }

    }
}



const App = () => {
    return <div className="container">
        <Todo />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

