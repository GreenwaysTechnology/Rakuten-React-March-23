import React from 'react'
import ReactDOM from 'react-dom/client'


//jsx rule 2:all elements must be organized under single root element.
// const Greeting = ()=> {
//    return <h1>Rakuten Digitals</h1>
//           <p>React is very nice framework</p>
// }
const Greeting = () => {
    return <div>
        <h1>Rakuten Digitals</h1>
        <p>React is very nice framework</p>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Greeting></Greeting>)
root.render(<Greeting />)


