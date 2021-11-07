import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersConteiner from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
