import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const authRedirectHOC = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }
    return compose(
        connect(mapStateToProps)
    )(RedirectComponent)
}