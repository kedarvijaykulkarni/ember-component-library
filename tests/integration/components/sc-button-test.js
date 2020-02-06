import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-button}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#sc-button}}
        template block text
      {{/sc-button}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it is a button element', async function(assert) {
    await render(hbs`{{sc-button}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'BUTTON');
  });

  test('it has the correct base class', async function(assert) {
    await render(hbs`{{sc-button}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-button ember-view');
  });

  test('it has the correct outline class modifier', async function(assert) {
    await render(hbs`{{sc-button outline=true}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-button sc-button--outline ember-view');
  });

  test('it has the correct color class modifier', async function(assert) {
    await render(hbs`{{sc-button color="primary"}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-button sc-button--primary ember-view');
  });

  test('it has the correct text class modifier', async function(assert) {
    await render(hbs`{{sc-button text=true}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-button sc-button--text ember-view');
  });

  test('it can have a left icon', async function(assert) {
    await render(hbs`{{sc-button icon-left='cancel' text=true}}`);
    const componentElement = this.element.firstChild;
    const leftIcon = componentElement.firstElementChild;

    assert.equal(leftIcon.tagName, 'I');
    assert.equal(leftIcon.className, 'sc-button__icon sc-button__icon--left sc-md-icon ember-view');
  });

  test('it can have a right icon', async function(assert) {
    await render(hbs`<ScButton @icon-right="cancel" @text={{true}}/>`);
    const componentElement = this.element.firstChild;
    const rightIcon = componentElement.lastElementChild;

    assert.equal(rightIcon.tagName, 'I');
    assert.equal(rightIcon.className, 'sc-button__icon sc-button__icon--right sc-md-icon ember-view');
  });

  test('it can have a both icons', async function(assert) {
    await render(hbs`{{sc-button icon-left='cancel' icon-right='cancel' text=true}}`);
    const componentElement = this.element.firstChild;
    const leftIcon  = componentElement.firstElementChild;
    const rightIcon = componentElement.lastElementChild;

    assert.equal(leftIcon.tagName, 'I');
    assert.equal(leftIcon.className, 'sc-button__icon sc-button__icon--left sc-md-icon ember-view');

    assert.equal(rightIcon.tagName, 'I');
    assert.equal(rightIcon.className, 'sc-button__icon sc-button__icon--right sc-md-icon ember-view');
  });
});
