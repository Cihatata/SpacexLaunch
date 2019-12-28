const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const watch = require('node-watch')

const path = require('path');
const port = 3000

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('./'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static('view'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/next', (req,res)=>{
    res.send('AL');
})

app.get('/post', (req,res)=>{
    res.send('AL2');
})



watch('spacex.json',(event,filename)=>{
    console.log(filename + 'change');
    console.log(event)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));