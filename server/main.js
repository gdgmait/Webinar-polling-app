import { Meteor } from 'meteor/meteor';
import './../imports/api/users';
import '../imports/startup/simple-schema-configuration';
import './../imports/api/webinars';

Meteor.startup(() => {
  console.log(Meteor.users.find({_id:this.userId}));
});
