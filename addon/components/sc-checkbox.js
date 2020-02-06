import ScComponent from './sc-component';
import layout from '../templates/components/sc-checkbox';

export default ScComponent.extend({
  layout,
  classModifierBindings: Object.freeze(['checked', 'disabled']),
});
