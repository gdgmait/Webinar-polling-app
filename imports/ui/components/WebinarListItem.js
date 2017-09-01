import {Meteor} from 'meteor/meteor';
import React from 'react';

export default class WebinarListItem extends React.Component {
  upvote(){
    Meteor.call('webinar.upvote',this.props.webinar._id);
  }
  downvote(){
    Meteor.call('webinar.downvote',this.props.webinar._id);
  }
  render(){
    return (
      <div>
        <p>{this.props.webinar.title}</p>
        <button onClick={this.upvote.bind(this)}>Upvote</button>
        <button onClick={this.downvote.bind(this)}>Downvote</button>
        <p>{this.props.webinar.upvotes}</p>
      </div>
    );
  }
}
