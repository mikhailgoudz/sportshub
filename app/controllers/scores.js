import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    session: service(),
    line: ' ',
    team: ' ',
    clicked: false,
    actions:{
        
        moneyline(moneyLine,team){   
            
          
            this.set("line", moneyLine);
            this.set("team", team)
            //this.clicked = true;
            this.set("clicked", true);

        },
        placeBet(amount) {
            let today = new Date().toString().slice(0,21)
            
            const newBet = this.store.createRecord('bet',{
               
                team: this.team,
                odds: this.line,
                uid: this.session.data.authenticated.user.uid,
                sport: 'NFL',
                datePlaced: today,
                wager: amount
                
         
            });

            newBet.save();
            
            console.log(this.line);
            console.log(this.team);  
            console.log(amount);
            this.set("clicked", false);
            
           
        },
        cancelBet: function() {
            this.set("clicked", false);
            this.set("line", 0);
            this.set("team", " ")
        }
        
        
    
    }
});
