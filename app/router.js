import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('scores');
  this.route('nba');
  this.route('nflweek');
  this.route('bets');
  this.route('funds');
});

export default Router;
