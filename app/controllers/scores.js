import Controller from '@ember/controller';



export default Controller.extend({
 
    actions:{

        moneyline(moneyLine,team){   
            
            alert(`${moneyLine} ${team}`);   //we need to store this in a bet slip  
            console.log( this.store.adapterFor('scores').get('host') );

        }
        

    }
});
