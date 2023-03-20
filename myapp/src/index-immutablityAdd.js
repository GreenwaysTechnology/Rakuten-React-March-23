//impure function  
// function addNewPower(hero) {
//     hero.power = 'fly'
//     return hero
// }

//pure function
function addNewPower(hero) {
    // hero.power = 'fly'
    //if prop exits update else add 
    return { ...hero, power: 'fly' }
}

let hero = {
    id: 1,
    name: 'foo'
}
let newHero = addNewPower(hero)
console.log('Both Hero is same  ', hero === newHero)