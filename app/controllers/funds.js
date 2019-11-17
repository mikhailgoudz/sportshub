import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({

    session: service(),
    
    actions: {
    
        deposit(amount){

        this.amount = amount;
        console.log(amount)


        let currentUserId = this.session.data.authenticated.user.uid
        
         this.store.query('users', {
            filter: {
              uid: currentUserId
            }
          }).then(function(user) {
            console.log(user.firstObject.fund);
            console.log(user);
            console.log(user.firstObject.uid); //expected this to return the model record of which ever user is signed in.. 
                              // so user.fund should be avaible for us to update the fund on the account

     
          });
           
        }
    }
});

