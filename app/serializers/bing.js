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
        
    //   let embedHtml = ''+item.embedHtml;
    //   var rex = /width=\\".*\\" height/
    //   embedHtml=embedHtml.replace(/width=".*" height/,'width=\\"1700\\" height')
    //   embedHtml=embedHtml.replace(/height=".*" src/,'height=\\"1700\\" src')
    //     console.log(embedHtml);

    
      item.attributes = {
        embedHtml : item.embedHtml,
        contentUrl: item.contentUrl
   
      };
  
      
    })
    
    

    delete payload.Search;
    return this._super(...arguments);
  }
});