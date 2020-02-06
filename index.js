'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon: function() {
    return true;
  },

  included(app, parentAddon) {
    const target = (parentAddon || app);
    const options = target.options[this.name] || {};

    target.options.sassOptions = target.options.sassOptions || {};
    target.options.sassOptions.includePaths = target.options.sassOptions.includePaths || [];

    target.options.sassOptions.includePaths.push(
      path.join('node_modules', 'tachyons-sass')
    );

    target.options.sassOptions.includePaths.push(
      path.join(__dirname, 'app', 'styles')
    );

    target.import(path.join('node_modules', 'pikaday', 'pikaday.js'));
    target.options.sassOptions.includePaths.push(
      path.join('node_modules', 'pikaday', 'scss')
    );
  },

  contentFor(type, config) {

    let basicDropdownConfig = config['ember-basic-dropdown'];
    if (!basicDropdownConfig || !basicDropdownConfig.destination) {
      if (config.environment !== 'test' && type === 'body-footer' && !config._emberBasicDropdownContentForInvoked) {
        config._emberBasicDropdownContentForInvoked = true;
        return '<div id="ember-basic-dropdown-wormhole"></div><div id="ember-component-library-wormhole"></div>';
      }
    }
  }
};
