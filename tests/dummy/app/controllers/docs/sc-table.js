import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  developers: Object.freeze([
    EmberObject.create({
      name: 'kyle',
      role: 'engineer',
      fullTime: true,
    }),
    EmberObject.create({
      name: 'james',
      role: 'engineer',
      fullTime: false
    }),
    EmberObject.create({
      name: 'ian',
      role: 'engineer',
      fullTime: true,
    })
  ])
});
