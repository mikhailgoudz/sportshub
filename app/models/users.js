import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    name: DS.attr('string'),
    fund: DS.attr('number'),
    uid: DS.attr('string')


});
