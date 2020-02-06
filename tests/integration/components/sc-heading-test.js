import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-heading', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-heading}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#sc-heading}}
        template block text
      {{/sc-heading}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it is a h1 element by default', async function(assert) {
    await render(hbs`{{sc-heading}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H1');
  });

  test('it\'s element can be customized based on the size attribute', async function(assert) {
    await render(hbs`{{sc-heading size=1}}`);
    let componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H1');

    await render(hbs`{{sc-heading size=2}}`);
    componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H2');

    await render(hbs`{{sc-heading size=3}}`);
    componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H3');

    await render(hbs`{{sc-heading size=4}}`);
    componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H4');

    await render(hbs`{{sc-heading size=5}}`);
    componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H5');

    await render(hbs`{{sc-heading size=6}}`);
    componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H6');

    await render(hbs`{{sc-heading size=7}}`);
    componentElement = this.element.firstChild;
    assert.equal(componentElement.tagName, 'H6');
  });

  test('it has the correct base class', async function(assert) {
    await render(hbs`{{sc-heading}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-heading sc-heading--1 ember-view');
  });
});
