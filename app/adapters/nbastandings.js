import DS from 'ember-data';
import ENV from 'clutch-sports/config/environment';

export default DS.JSONAPIAdapter.extend({
   
    host: 'https://api.sportsdata.io/v3/nba',

    pathForType(){

        return 'scores/json/Standings/2020'
    },
    buildURL(modelName, id, snapshot, requestType, query = {}) {
        /**
         * Add the API key to every query.
         */
        
        query.key = ENV.NBA; 
    
        return this._super(...arguments);
      }
});
