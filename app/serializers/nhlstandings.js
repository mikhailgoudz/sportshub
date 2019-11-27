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
          Key: item.Key,
          City: item.City,
          Name: item.Name,
          Wins: item.Wins,
          Losses: item.Losses,
          Division: item.Division

          }
      });

      return this._super(...arguments);
    }
});
