import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'
import produce from 'immer'


class Player extends React.Component {
    state = {
        name: 'Subramanian',
        house: {
            name: 'RavenClaw',
            points: 10 // increment this points
        }
    }
    onAdd = evt => {
        // this.setState((oldState) => {
        //     return {
        //         ...oldState,  // level -0 clone outter properties only 
        //         house: {
        //             ...oldState.house, // level 2
        //             points: oldState.house.points + 2         //clone all properties except points
        //         }
        //     }
        // })
        //using immer:
        this.setState((oldState) => {
            return produce(oldState, draft => {
                draft.house.points += 2
            })
        })
    }

    render() {
        return <div>
            <h1>State Mutation using Immer</h1>
            <h1>Name : {this.state.name}</h1>
            <h2>House  Name {this.state.house.name}</h2>
            <h2>Points {this.state.house.points}</h2>
            <button onClick={this.onAdd} className="btn btn-success">Add Point</button>
        </div>
    }
}


const App = () => {
    return <>
        <Player />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

