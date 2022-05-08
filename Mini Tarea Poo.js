
const fs = require('fs');
fs.readFile('/Users/jesusaguirre/POO/Mini Tarea Poo/numeros.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let numbers = data;
let f = FibonacciSequence(numbers);
console.log(f);

});

function FibonacciSequence(n) {
    if (n == 0){
        return 0;
    }
    if  (n == 1){
        return 1;
    }
    else {
        return (FibonacciSequence(n-2) + FibonacciSequence(n-1));
    }
}