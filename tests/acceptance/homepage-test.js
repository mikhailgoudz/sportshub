import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import sinon from 'sinon';

module('Acceptance | homepage', function(hooks) {
  let sandbox = sinon.createSandbox();
  setupApplicationTest(hooks);


  hooks.after(function() {
    sandbox.restore();
  });

  //test to make new user promo and nav doesnt show up
  test('promo and nav doesnt show unless signed in', async function(assert) {
    await visit('/');
    assert.dom('promo').doesNotExist();
    assert.dom('pagenavs').doesNotExist();
    
  })

//test to make sure user is able to log in
  test('user is able to log in', async function(assert) {

    await visit('/');
    assert.dom('.sign-in').exists();
    
  

  });


  //test to make sure user is logged in
  test('user logs in and sees details and promo', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'sportshub'
    
    });
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('.user-information').exists();
    //make sure modal is clickable
    await click('.promo-button').then(function(){
      assert.dom('.promomodal').exists();
      //you are able to exist or opt in
      assert.dom('.cancel').exists();
      assert.dom('.opt-in').exists();
    });
    
  });



});
