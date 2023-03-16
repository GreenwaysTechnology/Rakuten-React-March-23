import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

const Review = props => {
    //declare state 
    const [like, setLike] = useState(0) //inital state 
    const [dislike, setDislike] = useState(0)
    return <>
        <ReviewPage like={like} dislike={dislike} setLike={setLike} setDislike={setDislike} />
    </>
}

const ReviewPage = props => {
    const { like, dislike, setDislike, setLike } = props
    return <div className="container">
        <h1>Review App- State</h1>
        <h2>Like {like} Dislike {dislike}</h2>
        <button onClick={() => {
            setLike(like + 1)
        }} className="btn btn-success" style={{ padding: 10, marginRight: 10 }}>Like</button>
        <button onClick={() => {
            setDislike(dislike + 1)
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

