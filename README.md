# [SpacexLaunch](http://www.cihatata.me:3000) (old)
Gives information about the rockets to be launched and the last rocket launched. I used SpacexApi(https://docs.spacexdata.com/?version=latest) You can serve it on your own server.

## Installation
Use the [docker](https://www.docker.com) to install SpacexLaunch.

```bash
git clone https://github.com/Cihatata/SpacexLaunch.git
cd SpacexLaunch
docker build -t spacexinfo .
docker run -p 3000:3000 -d spacexinfo
curl localhost:3000 
```

## Used Tech-Stack
Semantic UI -- Web Design/Responsive Design CSS Library <br />
JQuery  -- DOM manipulation/AJAX API Request/JSON Data   <br />
JQuery.countdown.js -- use Countdown <br />
NodeJS -- serve Application(Express.js)/CORS settings(Middleware) <br />
Docker -- App Containerization <br />
DigitalOcean -- Server Hosting(Ubuntu) <br />

I dont know modern Front-End Framework(React,Angular,Vue...) So I used JQuery,AJAX 

## Challenges You Face
I had a hard time Responsive Designing

## Site 
[SpacexLaunch](http://www.cihatata.me:3000)

## Learned
JQuery.countdown.js



## License
[MIT](https://choosealicense.com/licenses/mit/)




