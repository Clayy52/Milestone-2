const express = require('express');
const app = express();
const port = 3000;
const users = [];
app.use(express.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html'); //send HTML file on GET request
});

app.post('/submit-form',(req,res) => {
    const username = req.body.username; // access form data for the user
    const password = req.body.password;
    const phoneumber = req.body.phonenumber;
    const birthday = req.body.birthday;
    const address = req.body.address;
    
    //sending the provided data to the user communicating between back and front end
    res.send('Username is '+users+' Password is '+password+' Phonenumber is'+phoneumber+" Address is "+address+" Birthday is "+birthday);
});

app.listen(port, () =>{
 console.log('server is running on http://localhost:${port}');
});