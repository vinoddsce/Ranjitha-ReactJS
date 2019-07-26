import './style.css';

const os = require('os');
const path = require('path');

console.log(os.freemem());
console.log(path);

const a = [1, 2, 3].map(n => n + 1);
console.log("Result: ", a);


