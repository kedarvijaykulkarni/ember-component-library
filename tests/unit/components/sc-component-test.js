import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | sc-component', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:sc-component').create();
    assert.ok(component);
  });

  test('baseClass is derived from the name of the component', function(assert) {
    const component = this.owner.factoryFor('component:sc-component').create();
    assert.equal(component.get('baseClass'), 'sc-component');
  });

  test('baseClass is derived from the name of the component when it\'s a child', function(assert) {
    const ScComponent = this.owner.factoryFor('component:sc-component').class;
    this.owner.register('component:sc-component/child', ScComponent.extend());
    const childComponent = this.owner.factoryFor('component:sc-component/child').create();
    assert.equal(childComponent.get('baseClass'), 'sc-component__child');
  });

  test('modifierClasses is derived from the classModifierBindings', function(assert) {
    const factory = this.owner.factoryFor('component:sc-component');
    const component = factory.create({ classModifierBindings: ['active', 'color'], active: true, color: 'blue' });

    assert.deepEqual(component.get('classModifierBindings'), ['active', 'color']);
    assert.equal(component.get('modifierClasses'), 'sc-component--active sc-component--blue');

    component.set('active', false);
    component.set('color', 'red');
    assert.equal(component.get('modifierClasses'), 'sc-component--red');
  });
});
