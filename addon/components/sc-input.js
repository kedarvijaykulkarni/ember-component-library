import ScComponent from './sc-component';
import layout from '../templates/components/sc-input';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default ScComponent.extend({
  layout,
  classModifierBindings: Object.freeze(['hasFocus', 'hasErrors', 'hasInput']),
  classNameBindings: ['hasIconLeft', 'hasIconRight'],

  isTouched: false,

  didReceiveAttrs() {
    if (this.get('value') !== null || this.get('value') !== undefined) {
      this.set('internalValue', this.get('value'));
    }
  },

  hasInput: computed('internalValue', function() {
    return !isEmpty(this.internalValue);
  }),

  showInputLength: computed('show-length', function() {
    if (this['show-length'] === false) {
      return false;
    }
    return true;
  }),

  hasIconLeft: computed('icon-left', function() {
    const iconLeft = this.get('icon-left');

    if (iconLeft) {
      return `${this.get('baseClass')}--icon-left`;
    } else {
      return false;
    }
  }),

  isIconLeftPlaceholder: computed('icon-left', function() {
    const iconLeft = this.get('icon-left');
    return iconLeft === true;
  }),

  hasIconRight: computed('icon-right', function() {
    const iconRight = this.get('icon-right');

    if (iconRight) {
      return `${this.get('baseClass')}--icon-right`;
    } else {
      return false;
    }
  }),

  focusIn() {
    this.set('hasFocus', true);
  },

  focusOut() {
    this.set('hasFocus', false);
  },

  hasErrors: computed('isTouched', 'errors.[]', 'error', function() {
    const { isTouched, errors = [] } = this.getProperties('isTouched', 'errors');
    return Boolean(isTouched && ((errors && errors.length > 0) || this.error));
  }),

  maxLengthString: computed('internalValue', 'max-length', function() {
    if (isEmpty(this['max-length'])) {
      return null;
    } else {
      const length = isEmpty(this.internalValue) ? 0 : this.internalValue.toString().length;
      return `${length}/${this['max-length'].toString()}`;
    }
  }),

  actions: {
    handleBlur() {
      this.set('isTouched', true);
    },

    handleInput(e) {
      this.set('internalValue', e.target.value);
      if (this.get('onChange')) {
        this.get('onChange')(e.target.value);
      }
    }
  }
});
