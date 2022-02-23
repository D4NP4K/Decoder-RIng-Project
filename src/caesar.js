// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    if (!encode) shift *= -1; 

    let inputMessage = input.toLowerCase();

    let finalMessage = ""; 

    
    for (let i = 0; i < inputMessage.length; i++) {
      let letter = inputMessage[i];
      if (letter.match(/[a-z]/)) {
        let code = inputMessage.charCodeAt(i) + shift;
        if (code > 122) {
          code = code - 26;
        }
        if (code < 97) {
          code = code + 26;
        }
        let newLetter = String.fromCharCode(code);
        finalMessage += newLetter;
      } else {
        finalMessage += letter;
      }
    }
    return finalMessage; 
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
