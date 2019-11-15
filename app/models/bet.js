import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    team: DS.attr('string'),
    odds: DS.attr('string'),
    uid: DS.attr('string')

});
