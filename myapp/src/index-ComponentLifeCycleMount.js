import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'



class ParentComponent extends React.Component {
    state = {
        i: 0
    }
    //mount phase methods
    constructor() {
        super()
        console.log('Parent Constructor is called')
    }
    render() {
        console.log('Parent render is called')
        return <div>
            <h1>Parent Component</h1>
            <ChildComponent />
        </div>
    }

    componentDidMount() {
        console.log('Parent ComponentDidMount is called')
    }
}



class ChildComponent extends React.Component {

    state = {
        j: 0
    }
    //mount phase methods
    constructor() {
        super()
        console.log('ChildComponent Constructor is called')
    }
    render() {
        console.log('ChildComponent render is called')
        return <div>
            <h1>Child Component</h1>
        </div>
    }

    componentDidMount() {
        console.log('ChildComponent ComponentDidMount is called')
    }


}


const App = () => {
    return <>
        <ParentComponent />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

