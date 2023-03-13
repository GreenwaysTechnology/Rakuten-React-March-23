import React from 'react'
import ReactDOM from 'react-dom/client'


//jsx rule 3:Component Name must start with uppercase-Noun

// const greeting = () => {
//     return <div>
//         <h1>Rakuten Digitals</h1>
//         <p>React is very nice framework</p>
//     </div>
// }
const Greeting = () => {
    return <div>
        <h1>Rakuten Digitals</h1>
        <p>React is very nice framework</p>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<greeting />)
root.render(<Greeting />)



