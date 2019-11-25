import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

    session: service(),
    clicked: false,
    actions:{

        activateNewUserPromo(){
            
            this.store.query('users', {
                filter: {
                uid: this.session.data.authenticated.user.uid
                }
            }).then(function(user) {
                
                let currentUser = user.firstObject;
                if(currentUser.newUser){
                    currentUser.set("newUserPromoOptIn" , true);
                    currentUser.save();
                    alert("Congrats, You've Opted In!")
                
                }
                else{

                    alert("Sorry, You Are Not A New User!")
                }
            });
            
            this.set("clicked",false);
        },
        cancel(){
            this.set("clicked",false);

        },
        showPromo(){

                     
            this.set("clicked",true);
        }

    }
});
