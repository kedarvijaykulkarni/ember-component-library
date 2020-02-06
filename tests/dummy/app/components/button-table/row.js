import Component from '@ember/component';
import layout from '../../templates/components/button-table/row';

export default Component.extend({
  layout,
  classNames: ['pa2 flex justify-center'],
  attributeBindings: ['style'],
  style: 'flex-basis: 33%; flex-grow: 1'
});
