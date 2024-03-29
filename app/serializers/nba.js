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
      item.type = primaryModelClass.modelName;
          item.attributes = {
          GameID : item.GameID,
          Status : item.Status,
          Home: item.HomeTeam,
          Away: item.AwayTeam,
          Season: item.Season,
          AwayTeamMoneyLine: item.AwayTeamMoneyLine,
          HomeTeamMoneyLine: item.HomeTeamMoneyLine,
          AwayTeamScore: item.AwayTeamScore,
          HomeTeamScore: item.HomeTeamScore
          }
      });

      return this._super(...arguments);
    }
});

