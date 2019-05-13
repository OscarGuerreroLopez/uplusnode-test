# Game

Hello there,
We prepared a little challenge for you. No bullshit, just a real world scenario, you could face as dev here.

## Description

We love to play our Playstation in office, one of the game here is GTA V. But we would like to buy older games from this series. And of course as cheap as possible.
You will be Backend developer providing API endpoint for your colleague on frond-end checking if game is cheap enough to buy.

Your tech stack will be Nest.js which is wrapper around Node.js + Express taking advantage of Typescript. If you don't know it, check it out, its really easy to start, check `https://docs.nestjs.com/`.

## Your task

You will work with API `https://www.cheapshark.com/api/`. Lucky for you somebody just started on this project, so continue, where he left. Fork this repo and:

- Expand app logic to fetch the cheapest price ever for game (spoiler alert - you need to call `https://www.cheapshark.com/api/documentation.html#deals`).
- Return just data in `IGame` interface to endpoint GET `/games`.
- When endpoint GET `/games` is called, you have to save this event to database (of your choice). You will save just when endpoint was called. In the end you will have in table two columns `id` and `called_at` of type DATETIME.
- Make endpoint GET `/calls` and return data from database you created. Return only calls made on Mondays.
- Endpoint GET `/calls` has to be private, make it so, it's up to you what method will you choose.
- Tests are up to you, if you will provide them, you will get in front of other candidates.

## Installation and run

```bash
$ npm install
```

```bash
$ npm start
```

## Extra End Point for Front-End test

I added another endpoint called zonky for the front end test since I was not able to connect to the Zonky API from the browser.
Sometimes I have done something similar to this, for example in a case where the front end part of a project was getting way too
much data from and API that could not be changed. So I created a little node server with graphQL that would get the data
from the original API and then have it ready for the front end guys so they could query whatever they needed without getting
a bunch of data they didn't need

## Aditional info

Adding user and password information to a file is not a good idea, but I have done it here for the test so the reviewer
can run the program fast and easy
