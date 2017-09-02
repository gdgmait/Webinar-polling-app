import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import {Session} from 'meteor/session';
import {History} from '/imports/routes/routes';
import {Link} from 'react-router-dom';

export default class forgotPassword extends React.Component{
  constructor(props){
    super(props);
    this.state={
      status:''
    };
  }
  formsubmit(e){
    e.preventDefault();
    let newPassword=this.refs.newPassword.value;
    let verifyPassword=this.refs.verifyPassword.value;
    if (newPassword !==verifyPassword) {
      this.setState({status:"Passwords don't match"});
      return;
    }
    let token=Session.get('global_token');
    Accounts.resetPassword(token, newPassword, (err)=>{
      if (err) {
        this.setState({status:err.reason});
      }
      else {
        this.setState({status:"Password reset"});
        Session.set('global_token',undefined);
      }
    });
  }
  render(){
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Reset Password</h1>
          {this.state.status ? <p>{this.state.status}</p> :undefined }
          <form onSubmit={this.formsubmit.bind(this)} className="boxed-view__form">
            <input type="password" ref="newPassword" name="newPassword" placeholder="New Password" required/>
            <input type="password" ref="verifyPassword" name="verifyPassword" placeholder="Verify password" required/>
            <button className="button button--space" type="Submit">Submit</button>
          </form>
          <Link to="/">Back to Application</Link>
        </div>
      </div>
    );
  }
}
