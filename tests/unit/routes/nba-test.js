import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nba', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nba');
    assert.ok(route);
  });
});
