//function calling from local module
const hello=require('./modules');

// hello();

// value accessing or function calling from javascript object
const helloobject=require('./modules');

console.log(helloobject.name);
console.log(helloobject.place);
helloobject.greet();

