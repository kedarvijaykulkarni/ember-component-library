import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-dialog', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<div id="safechain-component-library-wormhole"></div><ScDialog/>`);

    assert.dom(this.element).hasText('');
  });

  test('it has the correct base class', async function(assert) {
    await render(hbs`<div id="safechain-component-library-wormhole"></div><ScDialog/>`);
    const componentElement = this.element.lastChild;
    assert.equal(componentElement.className, 'sc-dialog ember-view');
  });
});
