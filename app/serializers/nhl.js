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
          AwayTeam: item.AwayTeam,
          AwayTeamMoneyLine: item.AwayTeamMoneyLine,
          HomeTeam: item.HomeTeam,
          HomeTeamMoneyLine: item.HomeTeamMoneyLine,
          Status : item.Status,
          AwayTeamScore: item.AwayTeamScore,
          HomeTeamScore: item.HomeTeamScore
   
          }
      });

      return this._super(...arguments);
    }
});

