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
    let className=`item item--position-${this.props.rank}`;
    return (
      <div className={className}>
        <p className="item__message">{this.props.webinar.title}</p>
        <p>
          <button className="button button--pill" onClick={this.upvote.bind(this)}>Upvote</button>
          <button className="button button--pill" onClick={this.downvote.bind(this)}>Downvote</button>
        </p>
        <p className="item__message">{this.props.webinar.upvotes}</p>
      </div>
    );
  }
}
