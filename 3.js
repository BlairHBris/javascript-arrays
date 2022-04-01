/*
Given an array containing the alphanumeric alphabet, write code that returns an array that:

* Removes the numbers 0-9 from the beginning of the alphabet
* Removes the ampersand (&) from the end of the alphabet
* Adds a "ch" between "c" and "d"
* Adds an "ñ" between "n" and "o"
* Adds an "ll" between "l" and "m"

*/

function getSpanishAlphabet(){
  const alphaNumericAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "&"]
  let spanishAlphabet = alphaNumericAlphabet.slice(10,36);  

  let spanishAddition = spanishAlphabet.splice(3, 0, "ch");
  let spanishAddition1 = spanishAlphabet.splice(15, 0, "ñ");
  let spanishAddition2 = spanishAlphabet.splice(13, 0, "ll");
  
  return spanishAlphabet
}

module.exports = getSpanishAlphabet

/*
You can run tests for this code to check your answers by running `npm run test-3`
*/
