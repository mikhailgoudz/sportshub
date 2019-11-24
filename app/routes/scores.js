import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'scores',
    async model() {
        const url = 'https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=152276092f6d485086221429787e75a8';
        this.store.adapterFor('scores').set('host', 'https://api.sportsdata.io/v3/nfl');
        var newHost = this.store.adapterFor('scores').get('host') + '/scores/json/ScoresByWeek/2019REG/';
        await fetch(url).then(response=> {
            return response.json();
        }).then(data=>{
            newHost += `${data}`;
            this.store.adapterFor('scores').set('host', newHost);
        })
 
        return this.store.query('scores', {param:' '});       
    
    }

  
});



