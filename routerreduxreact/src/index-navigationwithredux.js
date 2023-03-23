import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.css';
import { configureStore, createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'


const counterSlice = createSlice({
    name: 'counter',  //name used in action types : 'counter/increment'
    initialState: {
        value: 30
    },
    reducers: {
        //object notation pattern
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    },
    //builder callback api : it is recommended for typescript
    extraReducers: builder => {
        //builder.addCase
        builder.addDefaultCase((state, action) => { })
    }

})
//extract actions 
const { increment, decrement, incrementBy } = counterSlice.actions
const counterReducer = counterSlice.reducer

const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: counterReducer
    },
})


//components
const Home = props => <h1>Home</h1>
const AboutUs = props => <h1>About Us</h1>
const DashBoard = props => <h1>Dashboard</h1>
const Counter = props => {
    //Grab state from the redux
    const counter = useSelector(state => {
        //Get counter from the counter reducer
        return state.counter //appState.reducerName
    })
    //Get Dispatcher 
    const dispatch = useDispatch()

    const onIncrementBy = evt => {
        //trigger with payload
        dispatch(incrementBy(2))
    }


    return <div className="container">
        <h1>Counter Page</h1>
        <h1>Counter : {counter.value}</h1>
        <button onClick={() => {
            dispatch(increment())
        }} className='btn btn-success'>+</button>
        <button onClick={() => {
            dispatch(decrement())
        }} className='btn btn-success'>-</button>

        <button onClick={onIncrementBy} className='btn btn-success'>IncrementBy</button>
    </div>

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
    {/* Redux Provider must be top level component */}
    <Provider store={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
</>);

