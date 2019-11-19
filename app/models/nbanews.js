import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    NewsID: DS.attr('string'),
    Source: DS.attr('string'),
    TimeAgo: DS.attr('string'),
    Title: DS.attr('string'),
    Content: DS.attr('string'),
    Url: DS.attr('string'),
    Author: DS.attr('string')
});
