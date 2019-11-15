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
      console.log(item);
      item.type = primaryModelClass.modelName;
          item.attributes = {

            NewsID: item.NewsID,
            Source: item.Source,
            TimeAgo: item.TimeAgo,
            Title:  item.Title,
            Content: item.Content,
            Url:    item.Url,
            Author: item.Author
          }
      });

      return this._super(...arguments);
    }
});
