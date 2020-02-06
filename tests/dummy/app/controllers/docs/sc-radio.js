import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  account: EmberObject.create({
    type: 'checking'
  })
});
