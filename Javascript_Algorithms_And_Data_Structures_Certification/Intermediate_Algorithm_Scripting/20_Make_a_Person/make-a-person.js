// make-a-person.js
// Fill in the object constructor with the following methods below:
// getFirstName() getLastName() getFullName() 
// setFirstName(first) setLastName(last) setFullName(firstAndLast)
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.
var Person = function(firstAndLast) {
        // Array of thruth
        // Split the argument from constructor into an array
        //  using any non letter or number character as RegEx delimiter
        var data = firstAndLast.split(/\W+/) //> ['firsName','LastName']
        // Methods
        this.getFullName = function(){
            return data.join(' ') 
        }
        this.getFirstName = function(){
            return data[0]
        }
        this.getLastName = function(){
            return data[1]
        }
        this.setFirstName = function(first){
            return data[0] = first
        }
        this.setLastName = function(last){
            return data[1] = last
        } 
        this.setFullName = function(firstAndLast){
            data[0] = firstAndLast.split(/\W+/)[0]
            data[1] = firstAndLast.split(/\W+/)[1]
        }
        return firstAndLast
    }

var bob = new Person('Bob Ross')

// TESTS

console.log(bob.getFullName()) // should return "Bob Ross".
console.log(Object.keys(bob).length) // should return 6.
console.log(bob instanceof Person) // should return true.
console.log(bob.firstName) // should return undefined.
console.log(bob.lastName) // should return undefined.
console.log(bob.getFirstName()) // should return "Bob".
console.log(bob.getLastName()) // should return "Ross".

bob.setFirstName("Haskell")
console.log(bob.getFullName()) // should return "Haskell Ross" after.
bob.setLastName("Curry")
console.log(bob.getFullName()) // should return "Haskell Curry" after.
bob.setFullName("Haskell Curry")
console.log(bob.getFullName()) // should return "Haskell Curry" after.
bob.setFullName("Haskell Curry")
console.log(bob.getFirstName()) // should return "Haskell" after.
bob.setFullName("Haskell Curry")
console.log(bob.getLastName()) // should return "Curry" after.