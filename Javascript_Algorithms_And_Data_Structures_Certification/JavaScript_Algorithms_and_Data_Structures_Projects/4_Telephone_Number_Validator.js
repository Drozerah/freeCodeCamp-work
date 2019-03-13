// Return true if the passed string looks like a valid US phone number.
// FCC chalenge @{link} https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

// Check the regex I've created with regex101.com online regex tester
// @{link} https://regex101.com/r/rnPFAT/1

// const telephoneCheck = string => {
//     const result = /^1?\s?(\({1}\d{3}\){1}|\d{3})(\-|\s)?\d{3}(\-|\s)?\d{4}$/.test(string)
//     // console.log(result)
//     return result
// }

// one line arrow E6 syntax

const telephoneCheck = string => /^1?\s?(\({1}\d{3}\){1}|\d{3})(\-|\s)?\d{3}(\-|\s)?\d{4}$/.test(string)
    
telephoneCheck("555-555-5555")  // should return a boolean.
// telephoneCheck("5555555555")  // should return true.
// telephoneCheck("555-555-5555")  // should return true.
// telephoneCheck("(555)555-5555")  // should return true.
// telephoneCheck("1 555-555-5555")  // should return true.
// telephoneCheck("1 555 555 5555")  // should return true.
// telephoneCheck("1 456 789 4444")  // should return true.
// telephoneCheck("1(555)555-5555")  // should return true.
// telephoneCheck("1 (555) 555-5555")  // should return true.
// telephoneCheck("1 555)555-5555")  // should return false.
// telephoneCheck("555-5555")  // should return false.
// telephoneCheck("5555555")  // should return false.
// telephoneCheck("123**&!!asdf#")  // should return false.
// telephoneCheck("55555555")  // should return false.
// telephoneCheck("(6054756961)")  // should return false
// telephoneCheck("2 (757) 622-7382")  // should return false.
// telephoneCheck("0 (757) 622-7382")  // should return false.
// telephoneCheck("-1 (757) 622-7382")  // should return false
// telephoneCheck("2 757 622-7382")  // should return false.
// telephoneCheck("10 (757) 622-7382")  // should return false.
// telephoneCheck("27576227382")  // should return false.
// telephoneCheck("(275)76227382")  // should return false.
// telephoneCheck("2(757)6227382")  // should return false.
// telephoneCheck("2(757)622-7382")  // should return false.
// telephoneCheck("555)-555-5555")  // should return false.
// telephoneCheck("(555-555-5555")  // should return false.
// telephoneCheck("(555)5(55?)-5555")  // should return false.