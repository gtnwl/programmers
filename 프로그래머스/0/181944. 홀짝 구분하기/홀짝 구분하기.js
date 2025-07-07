const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    let [num] = input.map(Number)
    console.log(num % 2 === 0 ? num + " is even":num + " is odd")
 
}).on('close', function () {
    n = Number(input[0]);
});