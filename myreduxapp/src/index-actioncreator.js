import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constants
const counterincrement = 'counter/increment'
const counterincrementBy = 'counter/incrementBy'

const counterdecrement = 'counter/decrement'


const CounterReducer = (counter = { value: 30 }, action) => {
    //biz logic : immutable logic
    switch (action.type) {
        case counterincrement:
            return produce(counter, draft => {
                draft.value++
            })
        case counterincrementBy:
            return produce(counter, draft => {
                draft.value += action.payload
            })
        case counterdecrement:
            return produce(counter, draft => {
                draft.value--
            })
        default:
            return counter; //default state/inital state
    }
}

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

    const onIncrementBy = evt => {
        //action creator
        const incrementActioncreator = payload => {
            return {
                type: counterincrementBy,
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
            dispatch({ type: counterincrement })
        }} className='btn btn-success'>+</button>
        <button onClick={() => {
            dispatch({ type: counterincrement })
        }} className='btn btn-success'>-</button>

        <button onClick={onIncrementBy} className='btn btn-success'>IncrementBy</button>
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