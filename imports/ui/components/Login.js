import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {History} from '/imports/routes/routes';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      error: ''
    };
  }
  //onEnter is replaced by this method in react v4
  componentWillMount(){
    if (Meteor.userId())
    {
      History.replace('/dashboard');
    }
  }
  formsubmit(e)
  {
    e.preventDefault();
    let email=this.refs.email.value.trim();
    let password=this.refs.password.value.trim();
    Meteor.loginWithPassword({email},password,(err)=>{
      if (err) {
        this.setState({
          error:'Unable to login. Check email and password.'
        });
      }
      else {
        this.setState({
          error:''
        });
      }
    });
  }
  render(){
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.formsubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button type="Submit" className="button">Login</button>
          </form>
          <p><Link to="/signup">Need an account?</Link></p>
        </div>
      </div>
    );
  }
}
