import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.css';

//components
const Home = props => <h1>Home</h1>
const AboutUs = props => <h1>About Us</h1>
const Counter = props => <h1>Counter</h1>
const DashBoard = props => <h1>Dashboard</h1>


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
        </ul>
        <hr />
        {/* Place holder to render compoents */}
        <Outlet />
    </nav>
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

