const { ENCODE, DECODE } = require('./coder.js');
const path = require('path');
const fs = require('fs');

const checkValue = (action, shift, input, output) => {
  if (action !== ENCODE && action !== DECODE) {
    process.stderr.write(
      'Error! Please, write encode or decode for action parameter. \n'
    );
    process.exit(3);
  }

  const shiftNumber = Number(shift);
  if (typeof shiftNumber !== 'number' || isNaN(shiftNumber)) {
    process.stderr.write('Error! Please, write number for shift parameter. \n');
    process.exit(4);
  }

  if (output) {
    const outputFile = path.join(__dirname, `../${output}`);
    fs.access(outputFile, (err) => {
      if (err) {
        process.stderr.write('Missing file at the specified path \n');
        process.exit(2);
      }
    });
  }

  if (input) {
    const inputFile = path.join(__dirname, `../${input}`);
    fs.access(inputFile, (err) => {
      if (err) {
        process.stderr.write('Missing file at the specified path. \n');
        process.exit(2);
      }
    });
  }
};

module.exports = { checkValue };
