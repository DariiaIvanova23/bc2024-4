const { Command } = require('commander');
const path = require('path');
const fs = require('fs');
const lab3 = new Command();

lab3.option('-i, --input <type>', 'path to input file (JSON)');
lab3.option('-o, --output <type>', 'path to output file');
lab3.option('-d, --display', 'display result in console');

lab3.parse(process.argv);
const i = lab3.opts();

if (!i.input) {
  console.error("Please, specify input file");
  process.exit(1);
}

let data;
try {
  const inputPath = path.resolve(i.input);
  const fileContent = fs.readFileSync(inputPath, 'utf-8');
  data = JSON.parse(fileContent);
} 
catch (error) {
  console.error("Cannot find input file");
  process.exit(1);
}
