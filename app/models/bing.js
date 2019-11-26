import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    embedHtml : DS.attr('string'),
    contentUrl: DS.attr('string')

});
