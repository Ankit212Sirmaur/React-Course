const users = require('../Models/user');
const loginController = (req,res) =>{
    // for login we required email and password
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) return res.status(403).send('Email and Password are required');

    const user = users.find(item => item.email === email);
    if(!user){
        return res.status(403).send('user not found');
    }
    if(user.password != password){
        return res.status(403).send('password is incorrect');
    }
    return res.status(200).json(user);
}

const singupController = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(403).send('Email and Password are required');  
    } 

//  check if the email already present or not

    const id = Math.floor(Math.random*1000);
    users.push({
        id,
        email,
        password,
    })
    return res.status(201).json(id);
}

const getUserController = (req, res) =>{
    const id = req.query.id;
    // const id = req.params.id;
    if (!id) {
        return res.status(403).send("id not found");
    }
    const user = users.find(item => item.id === id);
    if (!user) {
        return res.status(404).send("User not found");
    }
    return res.status(200).json(user);
}
module.exports = {
    loginController,
    singupController,
    getUserController
}   