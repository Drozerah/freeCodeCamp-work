/** 
 *  Roman Numeral Converter
 *   Convert the given number into a roman numeral.
 * 
 *   @see {@link https://www.freecodecamp.org/challenges/roman-numeral-converter}
 * 
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice}
 *   @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/toString}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split}
 *   @see {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse}
 * 
 *   Coded by Drozerah  => https://www.freecodecamp.org/drozerah
 *   Date : 02/03/2018
 *   GitHub repository => https://github.com/Drozerah/freeCodeCamp-work/blob/master/FrontEndDevelopmentCertification/IntermediateAlgorithmScripting/roman-numeral-converter.js
 *   
 */

function convertToRoman(num) {

    // set an array that contain the combinations
    //      between the romans numerals and the conventional numbers system
    function data() {

        // set array | [units] | [tens] | [hundreds] | [thousands] |
        var arr = [
            [],
            [],
            [],
            []
        ];

        // set the object 'units' constructor
        var units = function (number, symbol) {
            this.number = number;
            this.symbol = symbol;
        };
        // push the units symbols into the array at index 0
        var arrUnits = arr[0];
        arrUnits.push(new units(null, null));
        arrUnits.push(new units(1, "I"));
        arrUnits.push(new units(2, "II"));
        arrUnits.push(new units(3, "III"));
        arrUnits.push(new units(4, "IV"));
        arrUnits.push(new units(5, "V"));
        arrUnits.push(new units(6, "VI"));
        arrUnits.push(new units(7, "VII"));
        arrUnits.push(new units(8, "VIII"));
        arrUnits.push(new units(9, "IX"));

        // set the object 'tens' constructor
        var tens = function (number, symbol) {
            this.number = number;
            this.symbol = symbol;
        };
        // push the tens symbols into the array at index 1
        var arrTens = arr[1];
        arrTens.push(new tens(null, null));
        arrTens.push(new tens(10, "X"));
        arrTens.push(new tens(20, "XX"));
        arrTens.push(new tens(30, "XXX"));
        arrTens.push(new tens(40, "XL"));
        arrTens.push(new tens(50, "L"));
        arrTens.push(new tens(60, "LX"));
        arrTens.push(new tens(70, "LXX"));
        arrTens.push(new tens(80, "LXXX"));
        arrTens.push(new tens(90, "XC"));

        // set the object 'hundreds' constructor
        var hundreds = function (number, symbol) {
            this.number = number;
            this.symbol = symbol;
        };
        // push the hundreds symbols into the array at index 2
        var arrHundreds = arr[2];
        arrHundreds.push(new hundreds(null, null));
        arrHundreds.push(new hundreds(100, "C"));
        arrHundreds.push(new hundreds(200, "CC"));
        arrHundreds.push(new hundreds(300, "CCC"));
        arrHundreds.push(new hundreds(400, "CD"));
        arrHundreds.push(new hundreds(500, "D"));
        arrHundreds.push(new hundreds(600, "DC"));
        arrHundreds.push(new hundreds(700, "DCC"));
        arrHundreds.push(new hundreds(800, "DCCC"));
        arrHundreds.push(new hundreds(900, "CM"));

        // set the object 'thousands' constructor
        var thousands = function (number, symbol) {
            this.number = number;
            this.symbol = symbol;
        };
        // push the hundreds symbol into the array at index 3
        var arrThousands = arr[3];
        arrThousands.push(new thousands(1000, "M"));

        // console.log(arr[0]);
        // console.log(arr[0][9].symbol);
        return arr;
    }

    // repeat a given string (first argument) num times (second argument).
    function repeatStringNumTimes(str, num) {

        string = "";

        if (num > 0) {

            for (var i = 0; i < num; i++) {
                string = string += str;
            }
            return string;
        }
        return string;
    }
    // get datas
    var arr = data();
    // check input
    //console.log(`Input => ${num}`);

    // convert the input num to string
    var str = num.toString();
    // convert string to array
    var splits = str.split('');
    //console.log(`splits (convert to array) => ${splits}`);

    //console.log(`splits.length => ${splits.length}`);
    // reverse the array
    var reverse = splits.reverse();
    //console.log(`reverse => ${reverse}`);

    // replace the first element in array with the matching roman
    //      symbol, it correspond to the units of the num parameter
    // get unit in the reverse array at index 0
    var unit = reverse[0];
    //console.log("unit => ", unit);
    // get the roman symbol that match the targeted unit
    var replaceUnit = arr[0][unit].symbol;
    reverse.splice(0, 1, replaceUnit);

    // is num > 9
    if (splits.length > 1) {
        // replace the second element in array
        //      it correspond to the tens
        // get tens in the reverse array at index 1
        var tens = reverse[1];
        // get the corresponding symbol
        var replaceTens = arr[1][tens].symbol;
        // remove the targeted value and add the symbol in the array
        reverse.splice(1, 1, replaceTens);

        // is num > 99
        if (splits.length > 2) {
            // replace the third element in array
            //      it correspond to the hundreds
            // get hundreds in the reverse array at index 2
            var hundreds = reverse[2];
            // get the corresponding symbol
            var replaceHundreds = arr[2][hundreds].symbol;
            // remove the targeted value and add the symbol in the array
            reverse.splice(2, 1, replaceHundreds);
        }

        // is num > 999
        if (splits.length > 3) {
            // replace the forth element in array
            //      it correspond to the thousands
            // set the thousands value to 0 (see data structure) assuming the roman
            //      system use a unique symbol repeated n times to express the thousands
            var thousands = 0;
            //console.log("thousands ",reverse[3]);
            var getSymbol = arr[3][thousands].symbol;
            // set string that correspond to the symbol repeated n times
            var string = repeatStringNumTimes(getSymbol, reverse[3]);
            // remove the targeted value and add the symbol string in the array
            reverse.splice(3, 1, string);
        }
    }

    //console.log(`toSymbols => ${reverse}`);
    // set the output as a new string
    // reverse the array
    // join all elements of the array into a string
    var output = reverse.reverse().join('');
    console.log(`Output string => ${output}`);
    return output;

}

convertToRoman(2) //should return "II".
convertToRoman(3) //should return "III".
convertToRoman(4) //should return "IV".
convertToRoman(5) //should return "V".
convertToRoman(9) //should return "IX".
convertToRoman(12) //should return "XII".
convertToRoman(16) //should return "XVI".
convertToRoman(29) //should return "XXIX".
convertToRoman(44) //should return "XLIV".
convertToRoman(45) //should return "XLV"
convertToRoman(68) //should return "LXVIII"
convertToRoman(83) //should return "LXXXIII"
convertToRoman(97) //should return "XCVII"
convertToRoman(99) //should return "XCIX"
convertToRoman(500) //should return "D"
convertToRoman(501) //should return "DI"
convertToRoman(649) //should return "DCXLIX"
convertToRoman(798) //should return "DCCXCVIII"
convertToRoman(891) //should return "DCCCXCI"
convertToRoman(1000) //should return "M"
convertToRoman(1004) //should return "MIV"
convertToRoman(1006) //should return "MVI"
convertToRoman(1023) //should return "MXXIII"
convertToRoman(2014) //should return "MMXIV"
convertToRoman(3999) //should return "MMMCMXCIX"