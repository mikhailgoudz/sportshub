import DS from 'ember-data';
import ENV from 'clutch-sports/config/environment'

//create an adapter to structure the API call in the correct form for the call
export default DS.JSONAPIAdapter.extend({
  host: 'https://api.sportsdata.io/v3/nba',
  pathForType() {
    return 'scores/json/GamesByDate/2019-NOV-4'
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    
    query.key = ENV.NBA; 

    return this._super(...arguments);
  }
});