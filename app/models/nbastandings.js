import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    TeamID: DS.attr('string'),
    City: DS.attr('string'),
    Name: DS.attr('string'),
    Wins: DS.attr('string'),
    Losses: DS.attr('string'),
    Conference: DS.attr('string')
});
