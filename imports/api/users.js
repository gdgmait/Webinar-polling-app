import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';
import {Mongo} from 'meteor/mongo';

Accounts.validateNewUser((user)=>{
  const email=user.emails[0].address;
  console.log("validating");
  new SimpleSchema({
    email:{
      type:String,
      regEx:SimpleSchema.RegEx.Email
    }
  }).validate({email});
  return true;
});
