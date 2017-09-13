import {Meteor} from 'meteor/meteor';
import React from 'react';

export default class WebinarListItem extends React.Component {
  constructor(){
    super();
    this.state = {
      "upvoted": false,
    }
  }
  componentWillMount(){
    Meteor.call('webinar.hasUserUpvoted',this.props.webinar._id, (error, result) => {
      if(!error){
        this.setState({upvoted: result});
      }
    });
  }
  changeState(){
    this.setState({upvoted: !this.state.upvoted});
    if(this.state.upvoted){
      this.downvote();
    }else{
      this.upvote();
    }
  }
  upvote(){
    Meteor.call('webinar.upvote',this.props.webinar._id);
  }
  downvote(){
    Meteor.call('webinar.downvote',this.props.webinar._id);
  }
  render(){
    let className=`item item--position-${this.props.rank}`;
    let bgColor = this.state.upvoted ? "green" : "white";
    let textColor = this.state.upvoted ? "white" : "green"
    let text = this.state.upvoted ? "Downvote":"Upvote";
    return (
      <div className={className}>
        <p className="item__message">{this.props.webinar.title}</p>
        <p>
          <button className="button button--pill" style={{backgroundColor: bgColor, color: textColor}} onClick={this.changeState.bind(this)}>{text}</button>
        </p>
        <p className="item__message">{this.props.webinar.upvotes}</p>
      </div>
    );
  }
}
