import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

/////////////////////////////////////////////////////////////////////////////////////

//step 1: reducer
const CounterReducer = (counter = { value: 30 }, action) => {
    //biz logic : immutable logic
    switch (action.type) {
        case 'counter/increment':
            //return immutable logic
            return { ...counter, value: counter.value + 1 }
        default:
            return counter; //default state/inital state
    }
}
//Step 2: Create Store Object 
const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: CounterReducer
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
    //Write listener
    const onIncrement = evt => {
        //send action to redux to increment
        let incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }

    return <div className="container">
        <h1>Counter App</h1>
        <h1>Counter : {counter.value}</h1>
        <button onClick={onIncrement} className='btn btn-success'>+</button>
    </div>

}



const App = () => {
    return <>
        {/* Step 3 */}
        <Provider store={appStore}>
            <Counter />
        </Provider>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)