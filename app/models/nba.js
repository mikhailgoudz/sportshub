import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
    GameID: DS.attr('string'),
    Status: DS.attr('string'),
    Home: DS.attr('string'),
    Away: DS.attr('string'),
    Season: DS.attr('string'),
    AwayTeamMoneyLine: DS.attr('number'),
    HomeTeamMoneyLine: DS.attr('number'),
    AwayTeamScore: DS.attr('string'),
    HomeTeamScore: DS.attr('string'),
    isScheduled: computed('Status',function(){
        if(this.get('Status')==="Scheduled"){
            return true
        }
        else{
            return false;
        }
    }),

    isFinal: computed('Status',function(){
        if(this.get('Status')==="Final"){
            return true
        }
        else{
            return false;
        }
    }),

    isLive: computed('Status',function(){
        if(this.get('Status')==="InProgress"){
            return true
        }
        else{
            return false;
        }
    })

});
