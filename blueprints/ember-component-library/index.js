/* eslint-env node */
module.exports = {
  afterInstall: function() {
    return Promise.all([
      this.addAddonsToProject({
        packages: [
          { name: 'ember-cli-sass', target: '^10.0.0' },
          { name: 'ember-truth-helpers', target: '^2.1.0' }
        ]
      }),
      this.addPackagesToProject([
        { name: 'tachyons-sass', target: '^4.9.5' },
        { name: "pikaday", target: "^1.8.0" }
      ])
    ]);
  }
};
