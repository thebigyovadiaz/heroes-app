import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoutes = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem('lastPath', rest.location.pathname);
  
  return (
    <Route {...rest}
      component={(props) => (
        (isAuthenticated)
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  )
}

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
