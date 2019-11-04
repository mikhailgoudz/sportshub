import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    GameID: DS.attr('string'),
    Home: DS.attr('string'),
    Away: DS.attr('string'),
    Season: DS.attr('string')
});
