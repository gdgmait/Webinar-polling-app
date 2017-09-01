import {Meteor} from 'meteor/meteor';
import {History} from '/client/main';
import React from 'react';
import PrivateHeader from './PrivateHeader';
import WebinarList from './WebinarList';

export default class DashBoard extends React.Component{
  componentWillMount(){
    if (!Meteor.userId())
    {
      History.replace('/');
    }
  }
  render(){
    return (
      <div>
        <PrivateHeader title="Webinar Poll"/>
        <div className="page-content">
          <WebinarList/>
        </div>
      </div>
    );
  }
}
