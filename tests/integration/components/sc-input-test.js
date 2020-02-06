import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus, blur, typeIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-input}}`);

    assert.dom(this.element).hasText('');
  });

  test('it has the correct base class', async function(assert) {
    await render(hbs`{{sc-input}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-input ember-view');
  });

  test('it has the has-focus modifier class when focused', async function(assert) {
    await render(hbs`{{sc-input}}`);
    const componentElement = this.element.firstChild;
    const inputElement = componentElement.querySelector('input');
    await focus(inputElement);
    assert.equal(componentElement.className, 'sc-input sc-input--has-focus ember-view');
  });

  test('it has the icon-left modifier class when and icon-left has been provided', async function(assert) {
    await render(hbs`{{sc-input icon-left="cancel"}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-input sc-input--icon-left ember-view');
  });

  test('it has the icon-right modifier class when and icon-right has been provided', async function(assert) {
    await render(hbs`{{sc-input icon-right="cancel"}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-input sc-input--icon-right ember-view');
  });

  test('it displays a caption', async function(assert) {
    await render(hbs`{{#sc-input}}Caption!{{/sc-input}}`);
    const captionElement = this.element.querySelector('.sc-input__caption');
    assert.dom(captionElement).hasText('Caption!');
  });

  test('it displays error messages only after blur', async function(assert) {
    this.set('error', 'This is an error message');
    await render(hbs`<ScInput @error={{error}}/>`);
    const componentElement = this.element.firstChild;
    const inputElement = componentElement.querySelector('input');
    const captionElement = componentElement.querySelector('.sc-input__caption');

    assert.dom(captionElement).hasText('');

    await focus(inputElement);
    await blur(inputElement);

    assert.dom(captionElement).hasText('This is an error message');
  });

  test('it can handle onChange', async function(assert) {
    this.set('value', '');
    const toType = 'Testing123';

    await render(hbs`{{sc-input onChange=(action (mut value))}}`);
    const componentElement = this.element.firstChild;
    const inputElement = componentElement.querySelector('input');
    await focus(inputElement);
    await typeIn(inputElement, toType);
    assert.equal(this.get('value'), toType);
  });

  test('it can be passed a default value', async function(assert) {
    const value = 'Testing123';
    this.set('value', value);

    await render(hbs`{{sc-input value=value}}`);
    const componentElement = this.element.firstChild;
    const inputElement = componentElement.querySelector('input');
    assert.equal(inputElement.value.trim(), value);
  });

  test('it only mutates the value when passed an action that would do so', async function(assert) {
    const value = 'Testing123';
    this.set('value', value);

    await render(hbs`{{sc-input value=value}}`);
    const componentElement = this.element.firstChild;
    const inputElement = componentElement.querySelector('input');

    assert.equal(inputElement.value.trim(), value);

    const toType = 'asldkfjasldfja';
    await focus(inputElement);
    await typeIn(inputElement, toType);

    assert.equal(inputElement.value.trim(), `${value}${toType}`);
    assert.equal(this.get('value'), value);
  });
});
