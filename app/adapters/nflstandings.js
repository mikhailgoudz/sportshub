import DS from 'ember-data';
import ENV from 'clutch-sports/config/environment'
/**
 * Import the ENV variable for the project.
 * Note that 'data-example' should be your project name.
 */

//create an adapter to structure the API call in the correct form for the call
export default DS.JSONAPIAdapter.extend({
//   namespace: 'api',
  host: 'https://api.sportsdata.io/v3/nfl',
  
  pathForType() {
    return 'scores/json/Standings/2019REG';
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    
    query.key =  ENV.NFL;
    return this._super(...arguments);
  }
});