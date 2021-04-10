import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;