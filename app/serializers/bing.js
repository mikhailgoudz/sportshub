import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  primaryKey: 'videoId',
  keyForAttribute(key) {
    return key;
  },

  normalizeResponse(store, primaryModelClass, payload) {
  
    payload.data = payload.value;
    payload.data.forEach(item => {
      item.type = primaryModelClass.modelName; 
      console.log(item.embedHtml);
      let embedHtml = ''+item.embedHtml;
      embedHtml=embedHtml.replace(/width=".*" height/,'width="1000" height')
      embedHtml=embedHtml.replace(/height=".*" src/,'height="500" src')
        console.log(embedHtml);

    
      item.attributes = {
        embedHtml : embedHtml,
        contentUrl: item.contentUrl
   
      };
  
      
    })
    
    

    delete payload.Search;
    return this._super(...arguments);
  }
});