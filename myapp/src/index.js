import React, { useEffect, useState } from 'react'
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
            <li key={index} style={{ listStyle: 'none' }} >
                <span style={{ margin: 10 }}>
                    {todo.id}
                </span>
                <span>
                    {todo.title}
                </span>
            </li>
        ))}
    </ul>
}



const Todos = props => {
    let initalState = {
        isLoaded: false, //spinner status
        items: [], //data,
        error: null
    }
    const [todos, setTodos] = useState(initalState)
   
    async function fetchTodos() {
        //api calls
        const url = 'https://jsonplaceholder.typicode.com/todos'
        try {
            const values = await (await fetch(url)).json()
            setTodos({ ...todos, isLoaded: true, items: todos.items.concat(values) })
        }
        catch (err) {
            setTodos({ ...todos, isLoaded: true, err: err })
        }
    }
    //componentDidMount
    useEffect(() => {
        fetchTodos()
    }, [])
    const { error, isLoaded, items } = todos
    //conditional Rendering
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <TodoList todos={items} />
    }

}

const App = () => {
    return <>
        <Todos />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

