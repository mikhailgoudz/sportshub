import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
    session: service(),

  async model(){

    var todayArray = new Date().toString().split('');

    let today = todayArray[4] + todayArray[5].toUpperCase() + todayArray[6].toUpperCase() + ' ' + todayArray[8] + todayArray[9];

    

    // let videos = await this.store.query('bing',{q:`NHL ${today} HIGHLIGHTS`});
    // return  videos.slice(0,3);

       
    }
});