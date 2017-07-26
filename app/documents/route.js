import Ember from 'ember'
import DS from 'ember-data'

export default Ember.Route.extend({

  model () {
    return Promise.reject(new DS.Errors({
      message: 'Not Found',
      status: '404'
    }))
  },
  actions: {

  }
})
