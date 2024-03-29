import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scores');
  this.route('nba');
  this.route('bets');
  this.route('funds');
  this.route('nflstandings');
  this.route('nflnews');
  this.route('nbastandings');
  this.route('nbanews');
  this.route('nhl');
  this.route('nbahighlights');
  this.route('nhlhighlights');
  this.route('nhlstandings');
  this.route('nhlnews');
  this.route('nflhighlights');
});

export default Router;
