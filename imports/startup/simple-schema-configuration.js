import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((e)=>{
  return new Meteor.Error(400,e.message);
});
