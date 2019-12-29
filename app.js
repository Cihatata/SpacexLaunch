const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
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
var response = {
    flight_num: "",
    mission_na: "",
    rocket_na: "",
    launch_site: ""
}

app.get('/next', (req,resp)=>{

    request('https://api.spacexdata.com/v3/launches/next' ,(err,req,res) => {

        let obj = JSON.parse(req.body)

        let flight_number = obj.flight_number
        let mission_name =  obj.mission_name
        let rocket_name = obj.rocket.rocket_name
        let launch_site_name=obj.launch_site.site_name
            //console.log(res) // Print the google web page.
    response = {
            flight_num: flight_number,
            mission_na: mission_name,
            rocket_na: rocket_name,
            launch_site: launch_site_name

        }
        resp.json(response);
    })

})

app.get('/post', (req,res)=>{
    res.send('AL2');
})



watch('spacex.json',(event,filename)=>{
    console.log(filename + 'change');
    console.log(event)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));