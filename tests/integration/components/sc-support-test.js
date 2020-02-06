import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-support', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-support}}`);

    assert.equal(this.element.textContent.trim(), 'If you need help, contact the SafeWire Support Team at support@safewire.com or call +1 614 362-8058');

    // Template block usage:
    await render(hbs`
      {{#sc-support}}
        template block text
      {{/sc-support}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
