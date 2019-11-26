import DS from 'ember-data';
import ENV from 'clutch-sports/config/environment'

//create an adapter to structure the API call in the correct form for the call
export default DS.JSONAPIAdapter.extend({
  host: 'https://api.sportsdata.io/v3/nhl/scores/json/GamesByDate/2019-',
  
  pathForType() {
    return ''
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
 
    query.key = ENV.NHL; 

    return this._super(...arguments);
  }
});