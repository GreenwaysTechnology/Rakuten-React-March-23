import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore, createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'


//add async behaviour
//api Which returns promise :
export function fetchCount(amount = 1) {
    return new Promise((resolve) =>
        // setTimeout(() => resolve({ data: amount }), 500)
        setTimeout(resolve, 5000, amount)
    );
}
//create middleware which executes async task: createAsyncThunk
const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response;
})

const counterSlice = createSlice({
    name: 'counter',  //name used in action types : 'counter/increment'
    initialState: {
        value: 10,
        status: 'idle', //to track the status of promise idle | pending | fulfilled
    },
    reducers: {
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
        console.log(builder)
        builder.addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.value = state.value + action.payload
        })
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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

/////////////////////////////////////////////////////////////////////////////////////

//Step 4 : Consume state from the redux, and send actions to redux for mutation
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
        <h1>Counter : {counter.value} {counter.status}</h1>
        <button onClick={() => {
            dispatch(increment())
        }} className='btn btn-success'>+</button>
        <button onClick={() => {
            dispatch(decrement())
        }} className='btn btn-success'>-</button>

        <button onClick={onIncrementBy} className='btn btn-success'>IncrementBy</button>
        <button
            onClick={() => dispatch(incrementAsync(10))}
        >
            Add Async
        </button>
    </div>

}



const App = () => {
    return <>
        <Provider store={appStore}>
            <Counter />
        </Provider>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)