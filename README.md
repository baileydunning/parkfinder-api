# National Parkfinder API

| Description      | URL                                                    | Method | Required Properties                      |
| ---------------- | ------------------------------------------------------ | ------ | ---------------------------------------- |
| Get all parks    | https://parkfinder-api.herokuapp.com/                  | GET    | n/a                                      |
| Get unique park  | https://parkfinder-api.herokuapp.com/:parkCode         | GET    | n/a                                      |
| Get park from NPS API | https://parkfinder-api.herokuapp.com/api/:parkCode | GET | n/a
| Get park reviews | https://parkfinder-api.herokuapp.com/:parkCode/reviews | GET    | n/a                                      |
| Post park review | https://parkfinder-api.herokuapp.com/:parkCode/reviews | POST   | `{name: <string>, parkReview: <string>}` |


## Technologies
+ Express.js
+ Node.js

## How To Access This Application
+ `git clone git@github.com:baileydunning/parkfinder-api.git`
+ `cd parkfinder-api`
+ `npm install`
+ `npm start`
+ Visit `localhost:4000` in your browser
