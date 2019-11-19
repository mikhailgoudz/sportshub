import DS from 'ember-data';
import ENV from 'clutch-sports/config/environment'

export default DS.JSONAPIAdapter.extend({
//   namespace: 'api',
  host: 'https://api.sportsdata.io/v3/nfl',
  
  pathForType() {
    return '';
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    
    query.key =  ENV.NFL;
    return this._super(...arguments);
  }
});