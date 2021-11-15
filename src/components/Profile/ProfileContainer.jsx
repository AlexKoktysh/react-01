import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { authRedirectHOC } from '../HOC/authRedirectHOC';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    authRedirectHOC
)(ProfileContainer)
