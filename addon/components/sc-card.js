import ScComponent from './sc-component';
import layout from '../templates/components/sc-card';

export default ScComponent.extend({
  layout,
  classModifierBindings: Object.freeze(['raised'])
});
