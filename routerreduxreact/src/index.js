import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import './index.css';
import React, { useEffect, useState } from 'react'
//components
const Home = props => <h1>Home</h1>
const AboutUs = props => <h1>About Us</h1>
const Counter = props => <h1>Counter</h1>
const DashBoard = props => <h1>Dashboard</h1>

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
                    <Link to={`/details/${todo.id}`}>{todo.title}</Link>
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
const TodoDetailsPage = props => {
    let { id } = useParams();
    let params = useParams()
    console.log(params)
    const navigate = useNavigate();

    return <>
        <h1>Details {id}</h1>
        <button onClick={() => {
            navigate('/todos')
        }}>Todos</button>
    </>
}


//create Layout Component
const Layout = props => {
    // Menus
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
        </ul>
        <hr />
        {/* Place holder to render compoents */}
        <Outlet />
    </nav>
}

const Profile = props => {
    return <h2>Profile</h2>
}
const Account = props => {
    return <h2>Account</h2>
}
const User = props => {
    return <>
        <h1>User Page</h1>
        <nav>
            <Link to="profile">Profile</Link> |
            <Link to="account">Account</Link>
        </nav>
        {/* Place holder to render compoents */}
        <Outlet/>
    </>
}

// Root Navigation
const App = props => {
    return <div>
        <h1>Router App</h1>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="counter" element={<Counter />} />
                <Route path="todos" element={<Todos />} />
                <Route path="details/:id" element={<TodoDetailsPage />} />
                {/* Nested Routing : Menu with in another:Sub Menu */}
                <Route path="user" element={<User />}>
                    {/* Sub Routing */}
                    <Route index element={<Profile/>}/>
                    <Route path="profile" element={<Profile/>} />
                    <Route path="account" element={<Account/>} />
                </Route>
                {/* No match found */}
                <Route path="*" element={<h1>Page Not Found</h1>} />

            </Route>
        </Routes>
    </div>
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</>);

