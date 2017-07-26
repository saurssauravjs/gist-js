import Ember from 'ember'

export default Ember.Route.extend({
  setupController (model, controller) {
    this._super(...arguments)
  },
  renderTemplate (controller, model) {
    this._super(...arguments)
    this.render('404')
  }
})
