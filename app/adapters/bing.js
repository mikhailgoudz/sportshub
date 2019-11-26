import DS from 'ember-data';
import ENV from 'clutch-sports/config/environment'

//create an adapter to structure the API call in the correct form for the call
export default DS.JSONAPIAdapter.extend({
  host: 'https://sportshub.cognitiveservices.azure.com/bing/v7.0/videos',
  
  pathForType() {
    return 'search'
  },
  buildURL(modelName, id, snapshot, requestType, query = {}) {
    /**
     * Add the API key to every query.
     */
    this.set('headers', {
        'Ocp-Apim-Subscription-Key': ENV.BING
      
      });
    
    query.cc = 'US';
    query.modules = 'all';
    

    return this._super(...arguments);
  }
});