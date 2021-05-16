const fs = require('fs');
const path = require('path');
const stream = require('stream');
const { caesarCoder } = require('./coder');

const getSource = (input) => {
  const inputFile = path.join(__dirname, `../${input}`);
  const source = input ? fs.createReadStream(inputFile) : process.stdin;

  return source;
};

const getDestination = (output) => {
  const outputFile = path.join(__dirname, `../${output}`);
  const destination = output
    ? fs.createWriteStream(outputFile, { flags: 'a' })
    : process.stdout;

  return destination;
};

const getTransformStream = (action, shift) => {
  const transformStream = new stream.Transform({ objectMode: true });

  transformStream._transform = function (chunk, encoding, callback) {
    const data = chunk.toString();
    const text = `${data} \n`;
    const shiftNumber = Number(shift);
    encoding = 'utf-8';
    try {
      callback(null, caesarCoder(text, shiftNumber, action));
    } catch (err) {
      callback(err);
    }
  };

  return transformStream;
};

module.exports = {
  getSource,
  getDestination,
  getTransformStream,
};
