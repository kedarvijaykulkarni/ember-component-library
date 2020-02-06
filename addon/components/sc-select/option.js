import ScComponent from '../sc-component';
import layout from '../../templates/components/sc-select/option';

export default ScComponent.extend({
  layout,
  click(e) {
    e.stopPropagation();
    if (this.onClick) {
      this.onClick(this.value);
    }
  }
});
