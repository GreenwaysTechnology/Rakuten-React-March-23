//complex object update :


//simple object update
function updateHero(hero, role) {
    return { ...hero, role: role }
}

let hero = {
    id: 1,
    name: 'foo',
    role: 'Action'
}
let updatedHero = updateHero(hero, 'Dramma')
console.log(hero === updatedHero ? 'same' : 'Different')

console.log('Nest Properties')
function incrementPoints(player, incrementBy) {
    //increment by two 
    return {
        ...player,  // level -0 clone outter properties only 
        house: {
            ...player.house, // level 2
            points: player.house.points + incrementBy         //clone all properties except points
        }
    }
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
/////////////////

function updateCustomer(customer, mobileNo) {

    return {
        ...customer, // level-0 id,name,contact
        contact: {
            ...customer.contact, // Level-1 // address
            communication: {
                ...customer.contact.communication, // Level -2
                mobileno: mobileNo
            }
        }
    }
}
let customer = {
    id: 1,
    name: 'Subramanian',
    contact: {
        address: {
            city: 'Coimbatore'
        },
        communication: {
            email: 'admin@gmail.com',
            mobileno: '9000000000'
        }
    }
}
const updatedCustomer = updateCustomer(customer, '8098245789')
console.log(updatedCustomer === customer ? 'Same Customer' : 'Different Customer')
console.log(updatedCustomer)