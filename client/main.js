import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {routes,onAuthChange} from './../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';

Tracker.autorun(()=>{
  const isAuthenticated= !!Meteor.userId();
  onAuthChange(isAuthenticated);
});


Meteor.startup(()=>{
  ReactDOM.render(routes,document.getElementById('app'));
});
