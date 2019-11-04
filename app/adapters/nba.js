import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

    host: 'https://api.sportsdata.io/v3/nba',
  
  pathForType() {
  
    return 'scores/json/AllTeams'
    
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    
    query.key =  'ed70d9c762334f2eb859beaccf96e022' 

    return this._super(...arguments);
  }
});
