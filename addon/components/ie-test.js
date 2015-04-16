import Ember from 'ember';
import layout from '../templates/components/ie-test';
import config from 'dummy/config/environment';

export default Ember.Component.extend({
  layout: layout,
  name: config.name
});
