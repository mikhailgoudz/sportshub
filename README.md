# Sportshub
Authors: Mikhail Goudz, Dennis Krupitsky, Mark Kubrak

This is a sports application project utilizing the sportsdataio, firebase, and microsoft azure apis to create a sports betting application. The user is able to sign in to their
google account, and from there they are able to view stats, highlights, standings, etc about multiple sports. They are able to see what upcoming games are scheduled by sport and
allowed the oppurtunity to place a wager on that team. The user is able to deposit funds into their account, and also view bets they have placed. 

## Time spent
Describe the time you spent on the project.
 * Tutorials, research: 10 hours
 * Coding required stories: 4 weeks


## User stories

### Application
 * [x] User can log into google account. 
 * [x] On page load, user can see navigation bar with several options.
 * [x] User can deposit money into their account
 * [x] User can place bets with suffecient funds, and then view their bets
 * [x] User can see live statistics about various sports



## GIF Walkthrough

![Walkthrough GIF](https://media.giphy.com/media/hWFRPWuzUWLuzCzEag/giphy.gif)


## Notes & shoutouts

This was a fun team final project for CSC 511, using various APIs we were able to create a fully dynamic sports application. Using ember firebase, we are able to store user data such as account funds, bets placed, and other various actions that could be taken on the website. The design is a mixture of custom CSS and bootstrap. This project was meant to be a combination of existing sports data websites like ESPN with sports betting applications like FanDuel, in order to have everything all in one place. 






-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# adding api keys

The API keys we use are hidden, if you wish to pull and run this project you must create 3 files in the config folder, called firebase_config.js and googlemaps_config.js and add following code

``` 
sportsdata.io to get keys
exports.config = {
    NFL: 'nflkey',
    NBA: 'nbakey',
    NHL: 'nhlkey'
};
 ```

``` 
Microsoft Azure Cognitive Services for key
exports.config = {
    BING: 'bingapi'

};
 ```

 ```
 Google Firebase to get key
 exports.config = {
    firebase: {
      apiKey: "key",
      authDomain: yourdomain",
      databaseURL: "your url",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
  }
```


This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd clutch-sports`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
