import ScComponent from './sc-component';
import layout from '../templates/components/sc-table';
import { computed } from '@ember/object';

const { alias, sort } = computed;

export default ScComponent.extend({
  layout,
  tagName: 'table',

  searchFields: null,
  searchValue: null,

  filteredData: computed('data', 'searchFields', 'searchValue', function() {
    if (this.data && this.searchFields && this.searchValue) {
      return this.data.filter((instance) => {
        return this.searchFields.some((field) => {
          return String(instance.get(field)).toLowerCase().includes(this.searchValue.toLowerCase());
        })
      });
    } else {
      return this.data;
    }
  }),

  sortHeaders: null,
  sortBy: '',
  sortAscending: true,
  _sortProperties: computed('sortBy', 'sortAscending', function () {
    const sortBy = this.sortAscending && this.sortBy ? this.sortBy : `${this.sortBy}:desc`;
    return Object.freeze([sortBy]);
  }),

  sortedData: sort('filteredData', '_sortProperties'),
  displayData: alias('sortedData'),

  actions: {
    handleSort(sortBy) {
      if (this.sortBy === sortBy) {
        if (this.sortAscending){
          this.toggleProperty('sortAscending');
        } else {
          this.set('sortBy', '');
          this.toggleProperty('sortAscending');
        }
      } else {
        this.set('sortBy', sortBy);
      }
    }
  }
});
