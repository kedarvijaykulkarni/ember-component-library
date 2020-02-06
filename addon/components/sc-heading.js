import ScComponent from './sc-component';
import layout from '../templates/components/sc-heading';

export default ScComponent.extend({
  layout,
  size: 1,
  classModifierBindings: Object.freeze(['color', 'size']),

  init() {
    this._super(...arguments);
    this.tagName = 'h1';

    const size = parseInt(this.get('size'));

    if (size === 1) {
      this.tagName = 'h1';
    } else if (size === 2) {
      this.tagName = 'h2';
    } else if (size === 3) {
      this.tagName = 'h3';
    } else if (size === 4) {
      this.tagName = 'h4';
    } else if (size === 5) {
      this.tagName = 'h5';
    } else if (size >= 6 ) {
      this.tagName = 'h6';
    } else {
      this.tagName = 'h1';
    }
  }
});
