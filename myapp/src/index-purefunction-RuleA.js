//Pure functions Rule A:

/**
 *   If function receives input, the function returns the same input without any mutation.
 */
//this functio is pure or not?

//this function is impure:React never recommends this type functions
function updateProfile(profile, city) {
    profile.city = city
    return profile;
}
const profile = {
    id: 1,
    name: 'subramanian',
    city: 'New York'
}
console.log('Before Update', profile)
const updatedProfile = updateProfile(profile, 'Coimbatore')
console.log('After Update', updatedProfile)


//here the funciton never modifies the variable
//this function just returns data as it it: Pure function
//every component is pure function with respect to props
function Header(props) {
    return `<h1>${props.name}</h1>`
}
console.log(Header({ name: 'subramanian' }))