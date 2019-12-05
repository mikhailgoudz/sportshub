import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nflhighlights', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nflhighlights');
    assert.ok(route);
  });
});
