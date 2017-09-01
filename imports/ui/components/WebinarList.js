import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import {Webinars} from '/imports/api/webinars';
import WebinarListItem from './WebinarListItem';

class WebinarList extends React.Component {
  renderWebinarList(){
    if (this.props.webinars.length===0) {
      return <p>No lectures here.</p>
    }
    else {
      return this.props.webinars.map((webinar)=>{
        return <WebinarListItem key={webinar._id} webinar={webinar}/>
      });
    }
  }
  render(){
    return (
      <div>
        {this.renderWebinarList()}
      </div>
    );
  }
}

export default createContainer(()=>{
  Meteor.subscribe('webinars');
  return {
    webinars:Webinars.find({},{sort:{upvotes:-1}}).fetch()
  };
},WebinarList);
