const minLowercaseLetterUnicode = 97;
const maxLowercaseLetterUnicode = 122;
const minUppercaseLetterUnicode = 65;
const maxUppercaseLetterUnicode = 90;
const numberLettersAlphabet = 26;
const ENCODE = 'encode';
const DECODE = 'decode';

const caesarCoder = (text, shift, action = ENCODE) => {
  if (action === DECODE) {
    shift *= -1;
  }

  if (shift < 0) {
    return caesarCoder(text, shift + 26);
  }

  let output = '';

  for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    if (letter.match(/[a-z]/i)) {
      let letterCode = text.charCodeAt(i);

      if (
        letterCode >= minUppercaseLetterUnicode &&
        letterCode <= maxUppercaseLetterUnicode
      ) {
        letter = String.fromCharCode(
          ((letterCode - minUppercaseLetterUnicode + shift) %
            numberLettersAlphabet) +
            minUppercaseLetterUnicode
        );
      } else if (
        letterCode >= minLowercaseLetterUnicode &&
        letterCode <= maxLowercaseLetterUnicode
      ) {
        letter = String.fromCharCode(
          ((letterCode - minLowercaseLetterUnicode + shift) %
            numberLettersAlphabet) +
            minLowercaseLetterUnicode
        );
      }
    }
    output += letter;
  }

  return output;
};

module.exports = { caesarCoder, ENCODE, DECODE };
