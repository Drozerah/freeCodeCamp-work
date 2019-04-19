// make-a-person.ES6.js
// Fill in the object constructor with the following methods below:
// getFirstName() getLastName() getFullName() 
// setFirstName(first) setLastName(last) setFullName(firstAndLast)
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.
class Person {
    constructor(firstAndLast) {
        // Split the argument from constructor into an array
        //  using any non letter or number character as RegEx delimiter
        const data = firstAndLast.split(/\W+/)
        this.getFullName = () => data.join(' ')
        this.getFirstName = () => data[0]
        this.getLastName = () => data[1]
        this.setFirstName = first => data[0] = first
        this.setLastName = last => data[1] = last
        this.setFullName = firstAndLast => {
            data[0] = firstAndLast.split(/\W+/)[0]
            data[1] = firstAndLast.split(/\W+/)[1]
        }
        return firstAndLast
    }
}
  
const bob = new Person('Bob Ross')

// TESTS

console.log(bob.getFullName())         // should return "Bob Ross".
console.log(Object.keys(bob).length)   // should return 6.
console.log(bob instanceof Person)     // should return true.
console.log(bob.firstName)             // should return undefined.
console.log(bob.lastName)              // should return undefined.
console.log(bob.getFirstName())        // should return "Bob".
console.log(bob.getLastName())         // should return "Ross".

bob.setFirstName("Haskell")
console.log(bob.getFullName())         // should return "Haskell Ross" after.
bob.setLastName("Curry")
console.log(bob.getFullName())         // should return "Haskell Curry" after.
bob.setFullName("Haskell Curry")
console.log(bob.getFullName())         // should return "Haskell Curry" after.
bob.setFullName("Haskell Curry")
console.log(bob.getFirstName())        // should return "Haskell" after.
bob.setFullName("Haskell Curry")
console.log(bob.getLastName())         // should return "Curry" after.