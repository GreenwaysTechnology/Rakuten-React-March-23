//Pure functions Rule B:
/**
 * 
 What if function receives input, need to be mutated but it should follow the pure function rule.

With help of "Immutablity"
 */

//pure functions : immutablity
/**
 * immutablity implementation patterns
 *  1.using plain javascript
 *  2.using Object.assign method
 *  3.using es 7 spread operator
 */

function updateProfile(profile, city) {
    //return new object : profile

    ////1.using plain javascript
    // return {
    //     id: profile.id,
    //     name: profile.name, 
    //     city: city
    // }
    //2.using Object.assign method
    //  return Object.assign({}, profile, { city: city })

    //using spread operator
    return { ...profile, city: city }
}
const profile = {
    id: 1,
    name: 'subramanian',
    city: 'New York'
}
console.log('Before Update', profile)
const updatedProfile = updateProfile(profile, 'Coimbatore')
console.log('After Update', updatedProfile)
//check mutable or immutable 
console.log(profile === updatedProfile ? "Same Object" : "Different Object")

