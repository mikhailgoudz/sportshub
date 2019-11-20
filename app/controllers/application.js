import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Controller.extend({

    session: service(),
    firebaseApp: service(),
    actions: {

        logout() {
            return this.get('session').invalidate();
        },
        async login() {
            const auth = await this.get('firebaseApp').auth();
            const provider = new firebase.auth.GoogleAuthProvider();
            return auth.signInWithPopup(provider).then((data)=>{
               
                this.store.query('users',{filter:{uid:data.user.uid}}).then((users)=>{
                    
                   if(users.length === 0)
                   {
                    const newUser = this.store.createRecord('users',{
                        
                        name: data.user.displayName,
                        fund: 0,
                        uid: data.user.uid


                    })

                    newUser.save();
                   }

                   
                })

            
           


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