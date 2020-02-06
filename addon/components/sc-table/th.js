import ScComponent from '../sc-component';
import layout from '../../templates/components/sc-table/th';
import { computed } from '@ember/object';

export default ScComponent.extend({
  layout,
  tagName: 'th',

  classNameBindings: ['sortable'],
  classModifierBindings: Object.freeze(['sorted', 'asc']),

  sortable: computed('click', function() {
    if(this.get('click')) {
      return `${this.get('baseClass')}--sortable`;
    }
  })
});
