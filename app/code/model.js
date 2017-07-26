import DS from 'ember-data';

const { attr} = DS;

export default DS.Model.extend({
  title : attr('string'),
  code: attr('string'),
  created_at: attr('date',{
    defaultValue(){
      return new Date();
    }
  }),
  updated_at: attr('date',{
    defaultValue(){
      return new Date();
    }
  })
});
