import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deposit: function(amount){
           this.amount = amount;
           alert(this.amount);
        }
    }
});

