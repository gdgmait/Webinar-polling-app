import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PrivateHeader =(props)=>{
  return (
    <div className="header">
      <div className="header-content">
        <div className="header__subheader">
          <img src="images/gdg-icon.png" className="header__image"/>
          <h1 className="header__title">{props.title}</h1>
        </div>
        <div className="header__rightalign">
          <Link to="/changepassword" className="button button--link-text">change Password</Link>
        <button className="button button--link-text" onClick={()=>{
          Accounts.logout();
        }}>Logout</button>
        </div>
      </div>
    </div>
  );
};
PrivateHeader.propTypes={
  title:PropTypes.string.isRequired
};

export default PrivateHeader;
