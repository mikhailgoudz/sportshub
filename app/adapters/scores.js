import DS from 'ember-data';

/**
 * Import the ENV variable for the project.
 * Note that 'data-example' should be your project name.
 */

//create an adapter to structure the API call in the correct form for the call
export default DS.JSONAPIAdapter.extend({
//   namespace: 'api',
  host: 'https://api.sportsdata.io/v3/nfl',
  
  pathForType() {
    return 'scores/json/ScoresByWeek/2019REG/9';
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    query.key = 'c339709091554a78abdf9fa5242fdab9'
    return this._super(...arguments);
  }
});