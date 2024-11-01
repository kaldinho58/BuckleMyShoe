const express = require('express');
const PORT = 3000;
const app = express(); 

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

function buckleConverter(input) {

    let message = "";
    if(input == 1 || input == 2) {
        // message += "buckle my shoe.";
        message = "buckle my shoe.";
    }
    else if(input == 3 || input == 4){
       message = "shut the door.";
    }
    else if(input == 5 || input == 6){
        message = "pick up sticks.";
    } 
    else if(input == 7 || input == 8){
        message = "lay them straight.";
    } 
    else if(input == 9 || input == 10){
        message = "a big fat hen!.";
    }  
    else {
        message = "Please enter a number between 1 and 10";
    }

    return message;
}
app.get('/', (req, res) => {
    console.log("Hello world - server");
    res.render('home', { title: 'Welcome to Buckle', message: ''});
});

app.post('/', (req,res) =>{
    let number = req.body.number;
    message = buckleConverter(number);
    res.render('home', {title : 'Home Page', message: message});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


