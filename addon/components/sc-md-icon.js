import ScComponent from './sc-component';
import layout from '../templates/components/sc-md-icon';
import { computed } from '@ember/object';

export default ScComponent.extend({
  layout,
  tagName: 'i',
  attributeBindings: ['click'],
  classNameBindings: ['clickable'],

  clickable: computed('click', function() {
    if(this.get('click')) {
      return `${this.get('baseClass')}--clickable`;
    }
  })
}).reopenClass({
  positionalParams: ['icon'],
  classModifierBindings: ['color', 'size']
});
