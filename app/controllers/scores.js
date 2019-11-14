import Controller from '@ember/controller';



export default Controller.extend({
 
    actions:{
        
        moneyline(moneyLine,team){   
            
            const newBet = this.store.createRecord('bet',{

                team: team,
                odds: moneyLine,
         
            });

            newBet.save();
        }

    }
});
