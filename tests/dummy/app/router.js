import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('sc-colors');
    this.route('sc-button');
    this.route('sc-card');
    this.route('sc-checkbox');
    this.route('sc-dialog');
    this.route('sc-divider');
    this.route('sc-heading');
    this.route('sc-md-icon');
    this.route('sc-input');
    this.route('sc-radio');
    this.route('sc-support');
    this.route('sc-switch');
    this.route('sc-table');
    this.route('tooltips');
    this.route('currency-display');
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
