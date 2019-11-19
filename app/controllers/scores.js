import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    session: service(),
   
    actions:{
        
        moneyline(moneyLine,team){   
            
            let today = new Date();
            const newBet = this.store.createRecord('bet',{
               
                team: team,
                odds: moneyLine,
                uid: this.session.data.authenticated.user.uid,
                sport: 'NFL',
                datePlaced: today
                
         
            });

            newBet.save();
        },
        changeWeek: function(week) {
            console.clear();
          
            this.store.adapterFor('scores').set('host', 'https://api.sportsdata.io/v3/nfl');
            var newHost = this.store.adapterFor('scores').get('host') + '/scores/json/ScoresByWeek/2019REG/';
            newHost += `${week}`;
            this.store.adapterFor('scores').set('host', newHost);
            return this.store.query('scores', {param:' '}).then(function(result) {
                
               
              });  
            
        }
    
    }
});
