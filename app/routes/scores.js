import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'scores',
    model() {
        let newHost = this.store.adapterFor('scores').get('host') + '/scores/json/ScoresByWeek/2019REG/11';
        console.log(newHost);
        this.store.adapterFor('scores').set('host', newHost);
        return this.store.query('scores', {param:' '});
    }
});
