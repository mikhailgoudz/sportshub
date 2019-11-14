import Controller from '@ember/controller';



export default Controller.extend({
 
    actions:{
        
        moneyline(moneyLine,team){   
            
            const newBet = this.store.createRecord('bet',{

                team: team,
                odds: moneyLine,
         
            });

            newBet.save();
        },
        async week(){


        

            let week = this.get("week");
           
            this.store.adapterFor('scores').set('host', 'https://api.sportsdata.io/v3/nfl');
            var newHost = this.store.adapterFor('scores').get('host') + '/scores/json/ScoresByWeek/2019REG/';

            newHost += `${week}`;
            this.store.adapterFor('scores').set('host', newHost);

     
            return this.store.query('scores', {param:' '});  //we should probably put searches in a different route 
           

        }

        
        

    }
});
