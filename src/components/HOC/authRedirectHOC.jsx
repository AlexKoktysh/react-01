import React from 'react';
import Login from '../Login/Login';

export const authRedirectHOC = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Login />
            return <Component {...this.props} />
        }
    }
    return RedirectComponent
}