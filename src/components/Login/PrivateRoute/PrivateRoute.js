import jwtDecode from 'jwt-decode';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if(!token){
            return false;
          }
        const decodedToken = jwtDecode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        return decodedToken.exp > currentTime;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedInUser.email ||  isLoggedIn()) ? (
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