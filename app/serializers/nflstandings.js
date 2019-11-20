import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'TeamID',
    keyForAttribute(key) {
      return key;
    },
    modelNameFromPayloadKey(modelName) { 
      return modelName;
    },
    normalizeResponse(store, primaryModelClass, payload) {
      payload.data = payload;
      payload.data.forEach (item => {
    
      item.type = primaryModelClass.modelName;
          item.attributes = {
          TeamID : item.TeamID,
          Team: item.Team,
          Wins: item.Wins,
          Losses: item.Losses
          }
      });

      return this._super(...arguments);
    }
});
