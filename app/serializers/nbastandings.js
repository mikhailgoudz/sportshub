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
      console.log(item);
      item.type = primaryModelClass.modelName;
          item.attributes = {
          TeamID : item.TeamID,
          City: item.City,
          Name: item.Name,
          Wins: item.Wins,
          Losses: item.Losses,
          Conference: item.Conference

          }
      });

      return this._super(...arguments);
    }
});
