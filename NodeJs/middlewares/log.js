const log = (req, res, next) =>{
    console.log('comes to the middleware');
    next();
}
module.exports = log;