import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore, createSlice, } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//slice = {reducers +actions}
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
console.log(counterSlice)
//extract actions 
const { increment, decrement, incrementBy } = counterSlice.actions
console.log(increment())
const counterReducer = counterSlice.reducer

const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: counterReducer
    }
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



const App = () => {
    return <>
        <Provider store={appStore}>
            <Counter />
        </Provider>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)