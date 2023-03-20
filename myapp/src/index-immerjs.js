import produce from "immer"

function incrementPoints(player, incrementBy) {
    //immutable function with plain js 
    // return {
    //     ...player,  // level -0 clone outter properties only 
    //     house: {
    //         ...player.house, // level 2
    //         points: player.house.points + incrementBy         //clone all properties except points
    //     }
    // }

    //mutable code but more readable.
    //mutable style of writting immuable code:

    // player.house.points = player.house.points + incrementBy
    //return player
    return produce(player, draftState => {
        //write mutable logic
        draftState.house.points += incrementBy
    })
}

let player = {
    name: 'Subramanian',
    house: {
        name: 'RavenClaw',
        points: 10 // increment this points
    }
}
const updatedPlayer = incrementPoints(player, 2)
console.log(player === updatedPlayer ? 'Same Player' : 'Different Player')