import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({

    session: service(),
    
    actions: {
    
        deposit(amount){
        
        
        this.amount = amount;
        
        let currentUserId = this.session.data.authenticated.user.uid
        
         this.store.query('users', {
            filter: {
              uid: currentUserId
            }
          }).then(function(user) {
            let update = user.firstObject;
            if(amount != undefined && amount > 0 )
            {
              update.set("fund" , +amount + +update.fund);
              update.save();
           
            }
          });
           
        }
    }
});

