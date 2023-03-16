import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'


const UserForm = props => {
    const [form, setForm] = useState({
        name: 'foo',
        email: 'admin@foo.com'
    })
    return <>
        <div>
            <label>Name</label>
            <input value={form.name} onChange={evt => {
                setForm({
                    ...form,
                    name: evt.target.value
                })
            }} />
        </div>
        <div>
            <label>Email</label>
            <input value={form.email} onChange={evt => {
                setForm({
                    ...form,
                    email: evt.target.value
                })
            }} />
        </div>
        <div>
            <p>Name {form.name}  - Email {form.email}</p>
        </div>
    </>
}



const App = () => {
    return <>
        <UserForm />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

