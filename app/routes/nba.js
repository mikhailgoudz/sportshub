import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'nba',
    async model() {

        var todayArray = new Date().toString().split('');

        let today = todayArray[4] + todayArray[5].toUpperCase() + todayArray[6].toUpperCase() + '-' + todayArray[8] + todayArray[9];
        
        var newHost = this.store.adapterFor('nba').get('host');
        
       if(newHost.endsWith('-') ){
        newHost += `${today}`;
    
        }


        this.store.adapterFor('nba').set('host', newHost);
        
        return this.store.query('nba', {param:' '});
    }
});
