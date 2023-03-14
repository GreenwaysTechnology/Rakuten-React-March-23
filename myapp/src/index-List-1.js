import React from 'react'
import ReactDOM from 'react-dom/client'

//simple List Rendering
// const NumberList = props => {
//   return <div>
//        {props.nums}
//   </div>
// }
const NumberList = props => {
    return <div>
        <ul>
            {
                props.nums.map(item => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </div>
}

const App = () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return <>
        <NumberList nums={data} />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

