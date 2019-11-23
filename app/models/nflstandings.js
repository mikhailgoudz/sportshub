import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({

    Division: DS.attr('string'),
    Conference: DS.attr('string'),
    TeamID: DS.attr('string'),
    Team: DS.attr('string'),
    Name: DS.attr('string'),
    Wins: DS.attr('string'),
    Losses: DS.attr('string'),
    IsAfcEast: computed('Conference','Division',function(){

        if(this.get('Conference') === 'AFC' && this.get('Division')==='East'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsAfcWest: computed('Conference','Division',function(){

        if(this.get('Conference') === 'AFC' && this.get('Division')==='West'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsAfcSouth: computed('Conference','Division',function(){

        if(this.get('Conference') === 'AFC' && this.get('Division')==='South'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsAfcNorth: computed('Conference','Division',function(){

        if(this.get('Conference') === 'AFC' && this.get('Division')==='North'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsNfcNorth: computed('Conference','Division',function(){

        if(this.get('Conference') === 'NFC' && this.get('Division')==='North'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsNfcSouth: computed('Conference','Division',function(){

        if(this.get('Conference') === 'NFC' && this.get('Division')==='South'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsNfcEast: computed('Conference','Division',function(){

        if(this.get('Conference') === 'NFC' && this.get('Division')==='East'){
            return true;
        }
        else{
            return false;
        }

    }),
    IsNfcWest: computed('Conference','Division',function(){

        if(this.get('Conference') === 'NFC' && this.get('Division')==='West'){
            return true;
        }
        else{
            return false;
        }

    })



});
