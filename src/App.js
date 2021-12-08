import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersConteiner from './components/Users/UsersContainer';
import { initializedApp } from './redux/app-reducer';
import { withRouter } from 'react-router';

class App extends React.Component {
  
componentDidMount() {
    this.props.initializedApp()
    }

render() {
    if (!this.props.initialized) {
        return <Preloader />
    }
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' 
                    render={() => <ProfileContainer />} />
                <Route path='/dialogs' 
                    render={() => <DialogsContainer />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/users' 
                    render={() => <UsersConteiner />} />
                <Route path='/settings' component={Settings} />
                <Route path='/login'
                    render={() => <Login />} />
                </div>
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App)