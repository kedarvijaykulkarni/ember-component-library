import ScComponent from '../sc-component';
import layout from '../../templates/components/sc-support/anchor';

export default ScComponent.extend({
  layout,
  tagName: 'a',
  attributeBindings: ['href']
});
