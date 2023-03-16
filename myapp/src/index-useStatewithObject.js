import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'


//hooks and object literals

const Review = props => {
    //declare state 
    const [review, setReview] = useState({ like: 0, dislike: 0 }) //inital state 

    //listener
    const onLike = evt => {
        // setReview(oldReview => {
        //     return { ...oldReview, like: oldReview.like + 1 }
        // })
        //short cut 
        setReview({ ...review, like: review.like + 1 })
    }
    return <div className="container">
        <h1>Review App- State</h1>
        <h2>Like {review.like} Dislike {review.dislike}</h2>
        <button onClick={onLike} className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Like</button>
        <button onClick={() => {
            // setReview(oldReview => {
            //     return { ...oldReview, dislike: oldReview.dislike + 1 }
            // })
            setReview({ ...review, dislike: review.dislike + 1 })

        }} className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Dislike</button>
    </div>
}



const App = () => {
    return <>
        <Review />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

