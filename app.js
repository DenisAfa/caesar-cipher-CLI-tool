const program = require('commander');
const pkg = require('./package.json');
const { transformation } = require('./components/transformation');

program
  .version(pkg.version)
  .description('App encode and decode a text by Caesar cipher.');

program
  .requiredOption('-a, --action <type>', 'choice action decode or encode')
  .requiredOption('-s, --shift <number>', 'setting the shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .action(() => {
    const { action, shift, input, output } = program.opts();
    transformation(action, shift, input, output);
  });

program.parse(process.argv);
