import React from 'react';
import {Link} from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {History} from '/imports/routes/routes';

export default class changePassword extends React.Component{
  constructor(props){
    super(props);
    this.state={
      status:'',
      buttonclass:'button button--space'
    };
  }
  componentWillMount(){
    if (!Meteor.userId())
    {
      History.replace('/');
    }
  }
  formsubmit(e){
    e.preventDefault();
    let oldPassword=this.refs.oldPassword.value;
    let newPassword=this.refs.newPassword.value;
    let verifyPassword=this.refs.verifyPassword.value;
    console.log(this.refs.savebutton.innerHTML);
    if (newPassword !== verifyPassword) {
      this.setState({status:"Passwords don't match"});
      return;
    }
    else {
      Accounts.changePassword(oldPassword, newPassword,(err)=>{
        if (err) {
          this.setState({status:err.reason});
          return;
        }
        else {
          this.setState({status:"Password Changed"});
          this.refs.savebutton.innerHTML="Saved";
          this.setState({buttonclass:"button button--space saved"});
        }
      });
    }
  }
  render(){
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Change Password</h1>
          {this.state.status ? <p>{this.state.status}</p> : undefined}
          <form onSubmit={this.formsubmit.bind(this)} className="boxed-view__form">
            <input type="password" ref="oldPassword" name="oldpassword" placeholder="Current password" required/>
            <input type="password" ref="newPassword" name="newpassword" placeholder="New password" required/>
            <input type="password" ref="verifyPassword" name="verifypassword" placeholder="Verify password" required/>
            <button className={this.state.buttonclass} ref="savebutton" type="Submit">Save Changes</button>
          </form>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}
