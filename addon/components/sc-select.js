import ScComponent from './sc-component';
import layout from '../templates/components/sc-select';

export default ScComponent.extend({
  layout,
  classModifierBindings: Object.freeze(['isOpen']),
  isOpen: false,
  isTouched: false,

  click() {
    this.toggleProperty('isOpen');
  },

  actions: {
    selectOption(value) {
      this.set('isOpen', false);
      if (this.onChange) {
        this.onChange(value);
      }
    }
  }
});
