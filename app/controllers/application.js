import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import users from '../models/users';

export default Controller.extend({


    //2. How do we query for a user existing in DB when they log in, if they don’t we create a new document for them
    session: service(),
    firebaseApp: service(),
    actions: {

        logout() {
            return this.get('session').invalidate();
        },
        async login() {
            const auth = await this.get('firebaseApp').auth();
            const provider = new firebase.auth.GoogleAuthProvider();
            return auth.signInWithPopup(provider).then(()=>{
                
                // this.store.findAll('users').then(()=>{
                    
                    
                //     if(this.session.data.authenticated.user.uid){

                //     }
                // })

            
           


            })
        }
    }
});


// favorite: this.store
//   .query('favorite', {
//     filter: {
//       yelpid: params.id
//     }
//   })
//   .then(favorites => {
//     return favorites.get('firstObject');
//   })