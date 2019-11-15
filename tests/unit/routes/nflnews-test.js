import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nflnews', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nflnews');
    assert.ok(route);
  });
});
