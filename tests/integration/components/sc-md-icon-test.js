import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-md-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-md-icon}}`);

    assert.dom(this.element).hasText('');
  });

  test('it puts the intended icon in the block', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-md-icon "cancel"}}`);

    assert.dom(this.element).hasText('cancel');
  });

  test('it has the correct base class', async function(assert) {
    await render(hbs`{{sc-md-icon 'cancel'}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-md-icon ember-view');
  });

  test('it adds the clickable modifier class when a click function is provided', async function(assert) {
    await render(hbs`{{sc-md-icon 'cancel' click=(action (mut test) 'test')}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-md-icon sc-md-icon--clickable ember-view');
  });

  test('it can be given a click function that works', async function(assert) {
    this.set('test', '');
    await render(hbs`{{sc-md-icon 'cancel' click=(action (mut test) 'test')}}`);
    const componentElement = this.element.firstChild;
    assert.equal(this.get('test'), '');
    await click(componentElement);
    assert.equal(this.get('test'), 'test');
  });
});
