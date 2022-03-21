/*
Given an array containing the english alphabet, write code that returns an array containing:

* The numbers 0-9 at the beginning of the alphabet (as numbers, not strings)
* An ampersand (&) at the end of the alphabet

*/

function getAlphaNumericAlphabet(){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let alphaNumericAlphabet = Array();
  let numbers = Array();

  for(let i = 0; i < 10; i++){
    numbers.push(i);
  }

  alphaNumericAlphabet = [...numbers, ...alphabet]

  alphaNumericAlphabet.push("&");

  console.log(alphaNumericAlphabet);

  return alphaNumericAlphabet
}

module.exports = getAlphaNumericAlphabet

/*
You can run tests for this code to check your answers by running `npm run test-2`
*/
