const express = require('express');
const app = express();
const {Port} = require('./config/serverConfig');
const ApiRoutes = require('./Routes');
// to parse the incoming data 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', ApiRoutes);

app.listen(Port, () =>{
    console.log(`Successfully started the server on PORT : ${Port}`);
}); 