import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({

    session: service(),
    
    actions: {
    
      deposit(amount, cardnum, expm, expy, cvv){
        this.amount = amount;
        
        let currentUserId = this.session.data.authenticated.user.uid
        
         this.store.query('users', {
            filter: {
              uid: currentUserId
            }
          }).then(function(user) {
            let currentUser = user.firstObject;
            if(amount != undefined && amount > 0 &&expm !=undefined && expy != undefined && cvv != undefined && cardnum != undefined)
            {
              if(cardnum.length < 15 || cardnum.length > 16 || expy.length > 4 || expy.length < 4 || expy < 2019 || expy > 2024 || expm < 1 || expm > 12 || cvv.length <  3 || cvv.length > 4)
              {
                alert("PLEASE ENTER VALID CARD");
              }
              else {
                if(currentUser.newUserPromoOptIn && amount >=200){
                  let bonus = 100;
                  currentUser.set("fund" , +amount + +currentUser.fund);
                  currentUser.set("fund", +bonus + +currentUser.fund);
                  currentUser.set("newUser",false);
                  currentUser.set("newUserPromoOptIn",false);
                  currentUser.save();

                  }
                else{
  
                  currentUser.set("fund" , +amount + +currentUser.fund);
                  currentUser.save();
                  
                }
                
              }

           
            }
            else{
              alert("PLEASE FILL OUT ALL FIELDS");
            }
             
          });
          //clear form
          this.setProperties({
            amount: '',
            cardNumber: ' ', 
            expityMonth: ' ',
            expityYear: ' ',
            cvvCode: ' ' 
        });     
      }
    }
});

