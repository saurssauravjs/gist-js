import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  title: attr('string'),
  slug: attr('string'),
  code: DS.hasMany('code'),
  created_at: attr('date',{
    defaultValue(){ return new Date(); }
  }),
  updated_at: attr('date',{
    defaultValue(){ return new Date(); }
  })

});
