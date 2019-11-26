import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
    session: service(),

  async model(){
    
    let videos = await this.store.query('bing',{q:'NBA HIGHLIGHTS'});
    return  videos.slice(0,2);

       
    }
});
