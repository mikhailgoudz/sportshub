import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({
    session: service(),
    model(){
        
    return ['https://user-images.githubusercontent.com/43256526/69488473-81efb700-0e1e-11ea-98b7-3a984e2b7842.png','https://user-images.githubusercontent.com/43256526/69488481-9338c380-0e1e-11ea-913e-34fb489a485d.png']
    }
});
