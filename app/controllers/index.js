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
                console.log(currentUser);
                currentUser.set("newUserPromoOptIn" , true);
                currentUser.save();
                }
                else{

                    alert("YOU ARE NOT A NEW USER, SORRY")
                }
                
            });
            

        },
        cancel(){
            this.set("clicked",false);

        },
        showPromo(){

                     
            this.set("clicked",true);
        }

    }
});
