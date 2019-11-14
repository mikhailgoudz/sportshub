import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nflweek', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nflweek');
    assert.ok(route);
  });
});
