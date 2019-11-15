import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    TeamID: DS.attr('string'),
    Team: DS.attr('string'),
    Wins: DS.attr('string'),
    Losses: DS.attr('string')

});
