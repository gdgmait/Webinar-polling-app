import {Meteor} from 'meteor/meteor';
import {History} from '/client/main';
import React from 'react';
import PrivateHeader from './PrivateHeader';

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
        <PrivateHeader title="Dashboard"/>
        <div className="page-content">
          <p>DashBoard</p>
        </div>
      </div>
    );
  }
}
