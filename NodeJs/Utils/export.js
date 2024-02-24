function multiply(a, b) {
    return a * b;
}    
const obj = {
    warning: function(info){
        console.log('warning', info);
    },
    error: function(info){
        console.log('error', info);
    }
}

module.exports = {multiply, obj};