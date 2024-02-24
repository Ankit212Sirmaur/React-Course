const post = (req, res) =>{
    res.status(201).json({
        name:'ankit',
        age:22
    })
}

module.exports = post;