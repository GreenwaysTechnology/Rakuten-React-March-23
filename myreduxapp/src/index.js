import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

/////////////////////////////////////////////////////////////////////////////////////

//step 1: reducer
const CounterReducer = (counter = { value: 30 }, action) => {
    //biz logic : immutable logic
    switch (action.type) {
        case 'counter/increment':
            return produce(counter, draft => {
                draft.value++
            })
        default:
            return counter; //default state/inital state
    }
}
//review Reducer

const ReviewReducer = (review = { like: 0, dislike: 0 }, action) => {
    switch (action.type) {
        case 'review/like':
            return produce(review, draft => {
                draft.like++
            })
        case 'review/dislike':
            return produce(review, draft => {
                draft.dislike++
            })
        default:
            return review; //default state/inital state
    }
}

//Step 2: Create Store Object 
const appStore = configureStore({
    reducer: {
        //list of Reducers
        counter: CounterReducer,
        review: ReviewReducer
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
        <h1>Counter Page</h1>
        <h1>Counter : {counter.value}</h1>
        <button onClick={onIncrement} className='btn btn-success'>+</button>
    </div>

}

const Review = props => {
    //Grab state from the redux
    const review = useSelector(state => {
        //Get counter from the counter reducer
        return state.review //appState.reducerName
    })
    //Get Dispatcher 
    const dispatch = useDispatch()

    return <div className="container">
        <h1>Review Page</h1>
        <h1>like : {review.like} dislike {review.dislike}</h1>
        <button onClick={() => {
            dispatch({ type: 'review/like' })
        }} className='btn btn-success'>Like</button>
        <button style={{ margin: 10 }} onClick={() => {
            dispatch({ type: 'review/dislike' })
        }} className='btn btn-success'>Dislike</button>
    </div>

}

const App = () => {
    return <>
        {/* Step 3 */}
        <Provider store={appStore}>
            <Counter />
            <hr />
            <Review />
        </Provider>
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)