const { splitString } = require("../../../../assn-2-js-exercises-nemeclogan/src/2.strings");

class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'Hello world'
     * capitalize('HELLO WORLD') // 'Hello world'
     */
    capitalize(input) {
      var allCaps = input.toUpperCase();
      return allCaps; 
    }
    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed 
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) {
      var splitString = input.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
    }
    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input) { 
   var arr = input.split(" ");
      return arr;
    }
}
