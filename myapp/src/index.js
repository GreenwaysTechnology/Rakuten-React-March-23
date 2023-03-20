import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'
import produce from 'immer'

const Player = props => {
    const [player, setPlayer] = useState({
        name: 'Subramanian',
        house: {
            name: 'RavenClaw',
            points: 10 // increment this points
        }
    })
    const onAdd = evt => {
        // setPlayer({
        //     ...player,  // level -0 clone outter properties only 
        //     house: {
        //         ...player.house, // level 2
        //         points: player.house.points + 2         //clone all properties except points
        //     }
        // })
        setPlayer(player => {
            return produce(player, draft => {
                draft.house.points += 2
            })
        })
    }

    return <div>
        <h1>State Mutation using Immer</h1>
        <h1>Name : {player.name}</h1>
        <h2>House  Name {player.house.name}</h2>
        <h2>Points {player.house.points}</h2>
        <button onClick={onAdd} className="btn btn-success">Add Point</button>
    </div>
}



const App = () => {
    return <>
        <Player />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

