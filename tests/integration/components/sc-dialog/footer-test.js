import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-dialog/footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-dialog/footer}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#sc-dialog/footer}}
        template block text
      {{/sc-dialog/footer}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it has the correct base class', async function(assert) {
    await render(hbs`{{sc-dialog/footer}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-dialog__footer ember-view');
  });
});
