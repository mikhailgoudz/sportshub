
import DS from 'ember-data';

//structure the JSON response into the format we need to then store in the model
export default DS.JSONAPISerializer.extend({
    primaryKey: 'GameKey',
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
          GameKey : item.GameKey,
          Home: item.HomeTeam,
          Away: item.AwayTeam,
          OverUnder: item.OverUnder,
          IsInProgress: item.IsInProgress,
          HomeScore : item.HomeScore,
          AwayScore : item.AwayScore,
          IsOver : item.IsOver,
          AwayTeamMoneyLine: item.AwayTeamMoneyLine,
          HomeTeamMoneyLine: item.HomeTeamMoneyLine
          } 
          
          console.log(item.attributes)
      });

      return this._super(...arguments);
    }
  });
