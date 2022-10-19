const a = 5;
const b = 3;

const c = a * b;

const d = 3;


const e = a * b;



// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

const s = (side1 + side2 + side3) / 2;


const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);

console.log('multiply of ' + a + ' and ' + b + ' is ' + c);
