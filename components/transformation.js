const { pipeline } = require('stream');
const { getSource, getDestination, getTransformStream } = require('./streams');

const transformation = (action, shift, input, output) => {
  const source = getSource(input);
  const transformStream = getTransformStream(action, shift);
  const destination = getDestination(output);

  pipeline(source, transformStream, destination, (err) => {
    if (err) {
      process.stderr.write(err.message + '\n');
      process.exit(1);
    }
  });
};

module.exports = {
  transformation,
};
