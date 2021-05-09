# Caesar-cipher-CLI-tool

## Install dependencies

```
git clone https://github.com/DenisAfa/caesar-cipher-CLI-tool.git
cd caesar-cipher-CLI-tool
git checkout caesar-cipher-CLI-tool
npm install
```

## Usage Example

```
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

## Description

CLI tool should accept 4 options (short alias and full name):

1. -s, --shift: a shift (required param)
2. -i, --input: an input file
3. -o, --output: an output file
4. -a, --action: an action encode/decode (required param)
