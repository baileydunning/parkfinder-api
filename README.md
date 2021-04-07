# National Parkfinder API

| Description      | URL                                                    | Method | 
| ---------------- | ------------------------------------------------------ | ------ | 
| Get all parks    | https://parkfinder-api.herokuapp.com/api/v1/parks                  | GET    | 
| Get unique park  | https://parkfinder-api.herokuapp.com/api/v1/parks/:parkCode         | GET    | 
| Get park from NPS API | https://parkfinder-api.herokuapp.com/api/v1/nps/:parkCode | GET |
| Get park alerts | https://parkfinder-api.herokuapp.com/api/v1/nps/alerts/:parkCode| GET | 
| Get park articles | https://parkfinder-api.herokuapp.com/api/v1/nps/articles/:parkCode| GET | 
| Get park campgrounds | https://parkfinder-api.herokuapp.com/api/v1/nps/campgrounds/:parkCode| GET | 
| Get park lesson plans | https://parkfinder-api.herokuapp.com/api/v1/nps/lessonplans/:parkCode| GET | 
| Get park places | https://parkfinder-api.herokuapp.com/api/v1/nps/places/:parkCode| GET | 
| Get park things to do | https://parkfinder-api.herokuapp.com/api/v1/nps/thingstodo/:parkCode| GET | 
| Get park webcams | https://parkfinder-api.herokuapp.com/api/v1/nps/webcams/:parkCode| GET | 



## Technologies
+ Node.js
+ Express.js
+ Postgres
+ Knex

## How To Access This Application
+ `git clone git@github.com:baileydunning/parkfinder-api.git`
+ `cd parkfinder-api`
+ `npm install`
+ `npm start`
+ Visit `localhost:4000/endpoint` in your browser
