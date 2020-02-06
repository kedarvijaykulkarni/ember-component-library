import ScComponent from './sc-component';
import layout from '../templates/components/sc-radio';

export default ScComponent.extend({
  layout,
  attributeBindings: ['checked', 'disabled', 'tabindex'],
  tabindex: 0,

  keyPress(e) {
    if (this.click && e.which === 13) {
      this.click();
    }
  }
}).reopenClass({
  classModifierBindings: ['checked', 'disabled']
});
