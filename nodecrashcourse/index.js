// https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=1907s
// Node.js Crash Course stopped at 32:34 creating file with node module

const Supplement = require('./micronutrients');

let D3 = new Supplement("Vitamin D3", 8, 120, 30);

console.log(D3.getPricePerServing());

