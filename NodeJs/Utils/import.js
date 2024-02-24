const {multiply, obj} = require('./export');

console.log(multiply(3,4));
obj.error('this is error');
obj.warning('this is warning');

for(var i = 1; i<5; i++){
    console.log('hello');
    console.log(i);
}   