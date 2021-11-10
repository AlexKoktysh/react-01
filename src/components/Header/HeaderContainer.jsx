import React from 'react';
import { connect } from 'react-redux';
import { getMe } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getMe()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getMe})(HeaderContainer)