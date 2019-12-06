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
    assert.dom('promo').doesNotExist("promo does not appear unless logged in");
    assert.dom('pagenavs').doesNotExist("page navs does not appear if not logged in");
    
  })

//test to make sure user is able to log in
  test('user is able to log in', async function(assert) {

    await visit('/');
    assert.dom('.sign-in').exists("user can see login button");
    
  

  });


  //test to make sure user is logged in
  test('user logs in and sees details and promo', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'sportshub'
    
    });
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('.user-information').exists("user can see details about fund and their username");
    //make sure modal is clickable
    await click('.promo-button').then(function(){
      assert.dom('.promomodal').exists("modal loads when logged in");
      //you are able to exist or opt in
      assert.dom('.cancel').exists("when promo is clicked user can cancel");
      assert.dom('.opt-in').exists("when promo is clicked user can opt in");
    });
    
  });



});
