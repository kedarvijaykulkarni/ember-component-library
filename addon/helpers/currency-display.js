import { helper } from '@ember/component/helper';

export function currencyDisplay(params/* , hash*/) {
  return parseFloat(params[0]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

// eslint-disable-next-line ember/new-module-imports
export default helper(currencyDisplay);

