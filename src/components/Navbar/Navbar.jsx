import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.active}>Message</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </div>
            <div>
                <FriendsContainer />
            </div>
      </nav>
    );
}

export default Navbar;