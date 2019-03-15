/* FFC : JavaScript Algorithms and Data Structures Projects: Cash Register

* SPECIFICATIONS *

Design a cash register drawer function checkCashRegister() that accepts purchase 
price as the first argument (price), payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key 
and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the 
change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key
change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and 
bills, sorted in highest to lowest order, as the value of the change key.

@{doc} https://en.wikipedia.org/wiki/Coins_of_the_United_States_dollar

*/

function checkCashRegister(price, cash, cid) {

    // returned object with a status key and a change key
    let result = {
        status: null,
        change: []
    }

    // status messages
    var msg = {
        equalToChangeDue: "CLOSED",
        canNotReturnExactChange: "INSUFFICIENT_FUNDS",
        canReturnExactChange: "OPEN"
    }

    // copying the original array
    var initialArrayCopy = JSON.parse(JSON.stringify( cid ))

    // get change due
    let changeDue = Number((cash - price).toFixed(2))
    /* Tests
    // let changeDue = 400
    // let changeDue = 335.41
    // console.log(`Change due : ${changeDue}`) // DEBUG

    /*  
    * DATA STRUCTURING
    */

    // complete a new array with the values per currency unit and the number of units per currency available in the cash-drawer

    // set values per currency unit ref
    const unitValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

    // populate array with the units values and their quantities
    const data = cid.map((element, index) => {
        // add unit value
        element[2] = unitValue[index]
        // add unit quantity
        element[3] = Number((element[1] / element[2]).toFixed(0))
        return element
    }).reverse()

    // console.log('CID before:', data) // DEBUG

    /* 
    * WORKING WITH DATA
    */

    // get cash in drawer amount
    const cidAmount = data.map(currencies => currencies[1])
        .reduce((acc, cur) => acc + cur)
        .toFixed(2)

    // console.log(`Cash in drawer amount : ${cidAmount}`) // DEBUG

    // intermediate result per currency
    let res = [null, 0]

    /**
     * Make change recursively until the given currency value become greater than the change due or unavailable, 
     * then go to the next currency until the end of the array
     * 
     * @param {Number} number - The array index to start
     * @returns {Object} Returns an object with a status key and a change key
     * 
     */
    const makeChange = (x) => {

        if (changeDue >= data[x][2] && data[x][3] > 0) {

            data[x][3]--
            res[1] = Number((res[1] + data[x][2]).toFixed(2))
            data[x][1] = Number((data[x][2] * data[x][3]).toFixed(2))
            changeDue = Number((changeDue - data[x][2]).toFixed(2))

            return makeChange(x)

        } else {

            if (res[1]) {

                res[0] = data[x][0]
                result.change.push(res)
            }

            // reset res array
            res = [null, 0]

            if (changeDue > 0 && x + 1 < data.length) {

                return makeChange(x + 1)

            } else {

                // console.log('CID after:', data) // DEBUG
                // console.log('Done') // DEBUG
                // console.log(`Change due : ${changeDue}`) // DEBUG
        
                if (changeDue > 0) { // cannot return the exact change
                    // console.log('cannot return the exact change') // DEBUG
                    result.status = msg.canNotReturnExactChange
                    result.change = []
                    // console.log('result', result) // DEBUG
                    return result
                } else { // can return the exact change
                    // console.log('can return the exact change') // DEBUG
                    result.status = msg.canReturnExactChange
                    // console.log('result', result) // DEBUG
                    return result
                }
            }
        }
    }

    /* 
    * PROCEED
    */

    switch (true) {
        case cidAmount < changeDue:
            result.status = msg.canNotReturnExactChange
            console.log('cas 1', result) // DEBUG
            return result
        case cidAmount == changeDue:
            result.status = msg.equalToChangeDue
            result.change = initialArrayCopy
            console.log('cas 2', result) // DEBUG
            return result
        case cidAmount > changeDue:
            console.log('cas 3', result) // DEBUG
            return makeChange(0)
    }
}

// TEST 1 
// STATUS : PASSED 
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}

// const cid = [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]
// const price = '19.5'
// const cash = '20'
// checkCashRegister(price, cash, cid)


// TEST 2
// STATUS : PASSED
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// const cid = [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]
// const price = '3.26'
// const cash = '100'
// checkCashRegister(price, cash, cid)


// TEST 3
// STATUS : PASSED
// should return {status: "INSUFFICIENT_FUNDS", change: []}

// const cid = [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]
// const price = '19.5'
// const cash = '20'
// checkCashRegister(price, cash, cid)


// TEST 4
// STATUS : PASSED
// should return {status: "INSUFFICIENT_FUNDS", change: []}

// const cid = [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]
// const price = '19.5'
// const cash = '20'
// checkCashRegister(price, cash, cid)


// TEST 5
// STATUS : PASSED
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

const cid = [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]
const price = '19.5'
const cash = '20'

checkCashRegister(price, cash, cid)

