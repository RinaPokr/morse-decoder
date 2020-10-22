const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 let arr = [];
 let  arr2 = [];
 let res = '';
 
arr = expr.split('**********');
for (let index = 0; index < arr.length; index++) {
   const element1 = arr[index];
   let word = '';
   let arr2 = element1.match(/(.{10})/g);
for (let j = 0; j < arr2.length; j++) {
 const element = arr2[j];
 let buk = '';
 for (let i = 0; i < 5; i++) {
   if (element[i * 2] === '1' && element[i * 2 + 1] === '0') {
     buk = buk + '.';
   } else if (element[i * 2] === '1' && element[i * 2 + 1] === '1') {
     buk = buk + '-';
   }
   
 }
 word += MORSE_TABLE[buk];

}
res = res + ' ' + word;
}

return res.trim();




}

module.exports = {
    decode
}