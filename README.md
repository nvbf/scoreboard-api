scoreboard-api
==============

Scoreboard API for keeping result on the matches.

##Development

To start the application run this command
`PORT=3000 NODE_ENV=development MONGO_URL="mongodb://localhost/scoreboard" npm start`

assumes that you have a mongodb installation on localhost (with default port)


## Using the api

### Explorer
There exist a explorer view that lets use browse and look trough all endpoints and actions you can do


### Clean HTTP methods used from the application

```
URL: localhost:3000/api/matches/
Method: POST
HEADERS:
Accept: application/json
Content-Type: application/json

BODY:
{
  "hometeam": "Geir Eithun - Iver Horrem",
  "awayteam": "Håkon Tveitan - Sindre Svendby",
  "sets": [
    0,0
  ]
}
```

