import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'GameID',
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
          GameID : item.GameID,
          Home: item.HomeTeam,
          Away: item.AwayTeam,
          Season: item.Season
          }
      });

      return this._super(...arguments);
    }
});

