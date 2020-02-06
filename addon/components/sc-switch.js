import ScComponent from './sc-component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import layout from '../templates/components/sc-switch';

export default ScComponent.extend({
  layout,
  classModifierBindings: Object.freeze(['checked']),

  bgColor: computed('checked', 'color', function () {
    if (this.checked) {
      if (!isEmpty(this.color)) {
        return `bg-${this.color}`;
      } else {
        return 'bg-primary';
      }
    } else {
      return 'bg-gray';
    }

  })
});
