import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';


const Home = props => <h1>Home</h1>
const Counter = props => <h1>Counter</h1>


//router configuration
const router = createBrowserRouter([
    {
        path: "/", //url mapping
        element: <Home />
    },
    {
        path: "/counter", //url mapping
        element: <Counter />
    }

])

const App = props => {
    return <div>
        <h1>React Router App</h1>
        {/* <Home/>
        <Counter/> */}
        <RouterProvider router={router} />

    </div>
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

