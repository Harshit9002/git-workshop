const a = 5;
const b = 3;

const c = a * b;

const d = 3;


const e = a * b;



// fibonacii

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
  
console.log('multiply of ' + a + ' and ' + b + ' is ' + c);
