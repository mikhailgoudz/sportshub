import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({


    NewsID: DS.attr('string'),
    PlayerID: DS.attr('string'),
    Source: DS.attr('string'),
    Updated: DS.attr('string'),
    Title: DS.attr('string'),
    Content: DS.attr('string'),
    Url: DS.attr('string')




});
