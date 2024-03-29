import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'NewsID',
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

            NewsID: item.NewsID,
            PlayerID: item.PlayerID,
            Source: item.Source,
            Updated: item.Updated,
            Title:  item.Title,
            Content: item.Content,
            Url:    item.Url
          
          }
      });

      return this._super(...arguments);
    }
});
