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
        placeBet(wager) {

            let today = new Date().toString().slice(0,21)
            let payout =0;
           
           
            if(wager != undefined && wager > 0 )
            {
                if(this.line > 0)
                {
                    payout = +wager + +((wager * (Math.abs(this.line) /100)).toFixed(2));
                   

                }
                else 
                {
                    payout =+wager + +((wager / (Math.abs(this.line) /100)).toFixed(2));
                   
                }
                console.log(payout);
                const newBet = this.store.createRecord('bet',{
                
                    team: this.team,
                    odds: this.line,
                    uid: this.session.data.authenticated.user.uid,
                    sport: 'NFL',
                    datePlaced: today,
                    wager: wager,
                    payout: payout
            
                });

                newBet.save();


                
            
                this.set("clicked", false);

                this.store.query('users', {
                    filter: {
                    uid: this.session.data.authenticated.user.uid
                    }
                }).then(function(user) {
                    let update = user.firstObject;
                    
                    update.set("fund" ,  +update.fund - +wager);
                    update.save();
                    
                    
                });

                //for Promo our promo will only work for new users.
                this.store.query('users', {
                    filter: {
                    uid: this.session.data.authenticated.user.uid
                    }
                }).then(function(user) {
                    let someUser = user.firstObject;
                    
                    someUser.set("newUser" , false);
                    someUser.save();
                    
                    
                });

                this.set('wager', '');
            }
           
        },
        cancelBet: function() {
            this.set("clicked", false);
            this.set("line", 0);
            this.set("team", " ")
        }
        
        
    
    }
});
