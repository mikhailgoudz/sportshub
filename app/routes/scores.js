import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'scores',
    model() {
    
        return this.store.query('scores', {param:' '});
    }
});
