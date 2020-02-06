import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sc-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sc-component}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#sc-component}}
        template block text
      {{/sc-component}}
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('it adds BEM block class', async function(assert) {
    await render(hbs`{{sc-component}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-component ember-view');
  });

  test('it adds BEM modifier classes', async function(assert) {
    const factory = this.owner.factoryFor('component:sc-component');
    factory.class.reopen({ classModifierBindings: Object.freeze(['active', 'color']) });

    await render(hbs`{{sc-component active=true color='red'}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-component sc-component--active sc-component--red ember-view');
  });

  test('it adds BEM element class', async function(assert) {
    const ScComponent = this.owner.factoryFor('component:sc-component').class;
    this.owner.register('component:sc-component/child', ScComponent.extend());

    await render(hbs`{{sc-component/child}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.className, 'sc-component__child ember-view');
  });

  test('it adds data-test-target attribute', async function(assert) {
    await render(hbs`{{sc-component data-test-target="test"}}`);
    const componentElement = this.element.firstChild;
    assert.equal(componentElement.dataset.testTarget, 'test');
  });
});
