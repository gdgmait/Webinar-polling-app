import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PrivateHeader =(props)=>{
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header__title">{props.title}</h1>
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
