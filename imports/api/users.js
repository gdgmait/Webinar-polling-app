import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';
import {Mongo} from 'meteor/mongo';
import {config_mail,config_password} from './config';

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

if (Meteor.isServer) {
  process.env.MAIL_URL=`${config_mail}:${config_password}@smtp.gmail.com:465/`;
  Accounts.emailTemplates.siteName = 'webinar-gdg.herokuapp.com';
  Accounts.emailTemplates.from = 'Mohit Chattlani<maitgdg@gmail.com>';
}
if (Meteor.isClient) {
  Accounts.onResetPasswordLink((token,done)=>{
    if (token) {
      Session.set('global_token',token);
    }
  });
}
