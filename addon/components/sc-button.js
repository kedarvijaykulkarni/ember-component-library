import ScComponent from './sc-component';
import layout from '../templates/components/sc-button';
import { computed } from '@ember/object';

export default ScComponent.extend({
  layout,
  tagName: 'button',
  attributeBindings: ['disabled'],
  classNameBindings: ['icon:sc-button--icon'],
  classModifierBindings: Object.freeze(['outline', 'color', 'text', 'link', 'anchor', 'small']),

  init() {
    this._super(...arguments);
    this.tagName = 'button';

    if (this.anchor) {
      this.tagName = 'a';
    }
  },

  iconIsImage: computed('icon', function() {
    if (this['icon']
      && (this['icon'].includes('/') || this['icon'].includes('.'))) {
      return true;
    }
  }),

  iconRightIsImage: computed('icon-right', function() {
    if (this['icon-right']
      && (this['icon-right'].includes('/') || this['icon-right'].includes('.'))) {
      return true;
    }
  }),

  iconLeftIsImage: computed('icon-left', function() {
    if (this['icon-left']
      && (this['icon-left'].includes('/') || this['icon-left'].includes('.'))) {
      return true;
    }
  })
});
