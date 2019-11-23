import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    name: DS.attr('string'),
    fund: DS.attr('number'),
    uid: DS.attr('string'),
    newUser: DS.attr('boolean'),
    newUserPromoOptIn: DS.attr('boolean')


});
