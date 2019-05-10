import React from 'react';
import { Redirect } from 'react-router-dom';

const withLogo = WrappedComponent => props => {
  const logo = sessionStorage.getItem('logo');
  if (logo) {
    return <WrappedComponent {...props} />;
  } else {
    return <Redirect to="/logo" />;
  }
};

export default withLogo;
