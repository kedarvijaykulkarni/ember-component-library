/* global Pikaday */
import ScComponent from './sc-component';
import layout from '../templates/components/sc-date-picker';
import { computed } from '@ember/object';

export default ScComponent.extend({
  layout,

  picker: null,

  formattedValue: computed('value', function() {
    if (this.value) {
      return (new Date(this.value)).toDateString();
    } else {
      return null;
    }
  }),

  didInsertElement() {
    const picker = new Pikaday({
      field: this.element.querySelector('input'),
      onSelect: this.onSelect.bind(this)
    });
    this.set('picker', picker);
  },

  onSelect(date) {
    if (this.onChange) {
      this.onChange(date);
    }
  },

  willDestroyElement() {
    if (this.picker) {
      this.picker.destroy();
    }
  },

  actions: {
    openPicker() {
      if (this.picker) {
        this.picker.show();
      }
    }
  }
});
