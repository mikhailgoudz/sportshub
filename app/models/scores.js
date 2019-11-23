import DS from 'ember-data';
import { computed } from '@ember/object';
const {Model} = DS;

//define the model with the variables we desire
export default Model.extend({
  GameKey: DS.attr('string'),
  Home: DS.attr('string'),
  Away: DS.attr('string'),
  OverUnder: DS.attr('string'),
  IsInProgress: DS.attr('boolean'),
  HomeScore: DS.attr('string'),
  AwayScore: DS.attr('string'),
  IsOver: DS.attr('boolean'),
  AwayTeamMoneyLine: DS.attr('number'),
  HomeTeamMoneyLine: DS.attr('number'),
  positiveAwayOdds: computed ('AwayTeamMoneyLine',function(){

    if(this.get('AwayTeamMoneyLine')>0){
        return true;
    }
    else{
        return false;
    }

}),
positiveHomeOdds: computed ('HomeTeamMoneyLine',function(){

  if(this.get('HomeTeamMoneyLine')>0){
      return true;
  }
  else{
      return false;
  }

})



});