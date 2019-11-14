import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'scores',
    async model() {
        const url = 'https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=c339709091554a78abdf9fa5242fdab9';
        this.store.adapterFor('scores').set('host', 'https://api.sportsdata.io/v3/nfl');
        var newHost = this.store.adapterFor('scores').get('host') + '/scores/json/ScoresByWeek/2019REG/';
        await fetch(url).then(response=> {
            return response.json();
        }).then(data=>{
            console.log(data);
            newHost += `${data}`;
            this.store.adapterFor('scores').set('host', newHost);
        })
 
        return this.store.query('scores', {param:' '});       
    
    },
    actions: {
        changeWeek: function(week) {
            console.clear();
            this.store.adapterFor('scores').set('host', 'https://api.sportsdata.io/v3/nfl');
            var newHost = this.store.adapterFor('scores').get('host') + '/scores/json/ScoresByWeek/2019REG/';
            newHost += `${week}`;
            this.store.adapterFor('scores').set('host', newHost);
            return this.store.query('scores', {param:' '}).then(function(result) {
                this.refresh();
              });  //we should probably put searches in a different route 
            
        }
    }

  
});



