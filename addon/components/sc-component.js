import Component from '@ember/component';
import { computed } from '@ember/object';
import { dasherize } from '@ember/string';
import { defineProperty } from '@ember/object';
import layout from '../templates/components/sc-component';

export default Component.extend({
  layout,
  classNameBindings: ['baseClass', 'modifierClasses'],
  attributeBindings: ['data-test-target'],

  baseClass: computed(function() {
    return this.toString().split(':')[1].replace('/', '__', 'g');
  }),

  init() {
    this._super(...arguments);

    const classModifierBindings = this.constructor.classModifierBindings || this.get('classModifierBindings');

    if(classModifierBindings) {
      defineProperty(this, 'modifierClasses', computed(...classModifierBindings, function() {
        const modifierValues  = this.getProperties(...classModifierBindings);
        const baseClass       = this.baseClass;
        return Object.keys(modifierValues)
          .reduce((classString, key) => {
            const value = modifierValues[key];

            if(value === true) {
              return `${classString} ${baseClass}--${dasherize(key)}`;
            } else if(value) {
              return `${classString} ${baseClass}--${dasherize(value.toString())}`;
            } else {
              return classString;
            }
          }, '')
          .trim();
      }));
    }
  }
});
