import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({

    TeamID: DS.attr('string'),
    City: DS.attr('string'),
    Name: DS.attr('string'),
    Wins: DS.attr('string'),
    Losses: DS.attr('string'),
    Conference: DS.attr('string'),
    IsEastern: computed('Conference',function(){

        if(this.get('Conference') === 'Eastern'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsWestern: computed('Conference',function(){

        if(this.get('Conference') === 'Western'){
            return true;
        }
        else{
            return false;
        }

    })
});
