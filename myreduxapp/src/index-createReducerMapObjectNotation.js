import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constants
const increment = 'counter/increment'
const incrementBy = 'counter/incrementBy'
const decrement = 'counter/decrement'

//reducer using createReducer api using Map Object notation  pattern
const initalState = { value: 30 }
// const counterReducer = createReducer(initalState, {
//     //actionName hardcorded
//     'counter/increment': (state, action) => {
//         console.log(state.value)
//         state.value++
//     },
//     'counter/decrement': (state, action) => {
//         console.log(state.value)
//         state.value--
//     },
//     'counter/incrementBy': (state, action) => {
//         console.log(state.value)
//         state.value = state.value + action.payload
//     }
// })

const counterReducer = createReducer(initalState, {
    //action Name from the variable
    [increment]: (state, action) => {
        console.log(state.value)
        state.value++
    },
    [decrement]: (state, action) => {
        console.log(state.value)
        state.value--
    },
    [incrementBy]: (state, action) => {
        console.log(state.value)
        state.value = state.value + action.payload
    }
})

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
        //action creator
        const incrementActioncreator = payload => {
            return {
                type: incrementBy,
                //payload:payload
                payload
            }
        }
        //trigger with payload
        dispatch(incrementActioncreator(2))
    }


    return <div className="container">
        <h1>Counter Page</h1>
        <h1>Counter : {counter.value}</h1>
        <button onClick={() => {
            dispatch({ type: increment })
        }} className='btn btn-success'>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
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