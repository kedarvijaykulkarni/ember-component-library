import ScComponent from './sc-component';
import layout from '../templates/components/sc-divider';

export default ScComponent.extend({
  layout,
  classModifierBindings: Object.freeze(['vertical', 'horizontal', 'color']),

  init(){
    this._super(...arguments);

    if (!this.vertical) {
      this.tagName = 'hr';
      this.horizontal = true
    }
  }
});
