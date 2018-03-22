function addTogether() {

    // create a new Array instance from the arguments Object
    var args = Array.from(arguments);
    // check if the typeof all arguments are numbers
    var isNumbersAll = args.every(function (elm) {

        return typeof elm === "number";

    });

    // arguments types === numbers
    if (isNumbersAll) {
        // arguments contains more than one argument
        return args.length > 1 ?
            args.reduce(function (a, b) { // sum arguments

                return a + b;

            }) : // or

            function (opt) { // else : closure call
                // check the type of the argument return the sum or undefined
                return typeof opt === "number" ? opt + args[0] : undefined;
            }

    }
    // else : arguments types != numbers
    return undefined;
}


console.log(addTogether(2, 3));//should return 5.
console.log(addTogether(2)(3));//should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); //should return undefined.
console.log(addTogether(2, "3")); //should return undefined.
console.log(addTogether(2)([3])); //should return undefined.