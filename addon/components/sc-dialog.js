import ScComponent from './sc-component';
import layout from '../templates/components/sc-dialog';

export default ScComponent.extend({
  layout,
  tagName: null,

  didInsertElement() {
    document.body.classList.add('overflow-hidden');
  },

  willDestroyElement() {
    document.body.classList.remove('overflow-hidden');
  }
});
