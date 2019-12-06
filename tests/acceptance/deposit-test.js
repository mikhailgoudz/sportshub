import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import sinon from 'sinon';

module('Acceptance | funds', function(hooks) {
  let sandbox = sinon.createSandbox();
  setupApplicationTest(hooks);


  hooks.after(function() {
    sandbox.restore();
  });

  //deposit page is accessible 
  test('deposit page and form exist', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'sportshub'
    
    });
    await visit('/funds');
    assert.dom('.fundspage').exists("the deposit page loads");

    
  })

  //fill in the form
  test('put in information to the form', async function(assert){
    await authenticateSession({
      userId: 1,
      displayName: 'sportshub'
    
    });
    await visit('/funds');

    //fill in amount
    fillIn(".theamount", 200).then(function(){
      assert.dom('.theamount').hasValue("200");

    });
    //fill in card number
    fillIn(".cardnumber", 1111111111111111).then(function(){
      assert.dom('.cardnumber').hasValue("1111111111111111");

    });
    //fill in month
    fillIn(".month", 12).then(function(){
      assert.dom('.month').hasValue("12");

    });
    //fill in year
    fillIn(".year", 2020).then(function(){
      assert.dom('.year').hasValue("2020");

    });
    //fill in cvv
    fillIn(".cvv", 202).then(function(){
      assert.dom('.cvv').hasValue("202");

    });
    
  

  });

});
