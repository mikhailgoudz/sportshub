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
                sport: "NBA",
                datePlaced: today

            });

            newBet.save();
        }

    }
});
