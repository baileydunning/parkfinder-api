# National Parkfinder API

| Description      | URL                                                    | Method | Required Properties                      |
| ---------------- | ------------------------------------------------------ | ------ | ---------------------------------------- |
| Get all parks    | https://parkfinder-api.herokuapp.com/api/v1/parks                  | GET    | n/a                                      |
| Get unique park  | https://parkfinder-api.herokuapp.com/api/v1/parks/:parkCode         | GET    | n/a                                      |
| Get park from NPS API | https://parkfinder-api.herokuapp.com/api/v1/nps/:parkCode | GET | n/a
| Get park alerts | https://parkfinder-api.herokuapp.com/api/v1/nps/alerts/:parkCode| GET | n/a
| Get park articles | https://parkfinder-api.herokuapp.com/api/v1/nps/articles/:parkCode| GET | n/a
| Get park campgrounds | https://parkfinder-api.herokuapp.com/api/v1/nps/campgrounds/:parkCode| GET | n/a
| Get park lesson plans | https://parkfinder-api.herokuapp.com/api/v1/nps/lessonplans/:parkCode| GET | n/a
| Get park places | https://parkfinder-api.herokuapp.com/api/v1/nps/places/:parkCode| GET | n/a
| Get park things to do | https://parkfinder-api.herokuapp.com/api/v1/nps/thingstodo/:parkCode| GET | n/a
| Get park webcams | https://parkfinder-api.herokuapp.com/api/v1/nps/webcams/:parkCode| GET | n/a



## Technologies
+ Express.js
+ Node.js
+ Knex

## How To Access This Application
+ `git clone git@github.com:baileydunning/parkfinder-api.git`
+ `cd parkfinder-api`
+ `npm install`
+ `npm start`
+ Visit `localhost:4000/endpoint` in your browser
