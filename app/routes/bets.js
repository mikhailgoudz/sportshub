import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
    session: service(),
    model(){

        return this.store.query('bet',{filter:{uid:this.session.data.authenticated.user.uid}});
    }
});
