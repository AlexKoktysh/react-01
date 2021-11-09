import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src='https://im0-tub-by.yandex.net/i?id=a7af56886066c3c58667cdab3b6ee72f&n=13'/>
            <div className={styles.loginBlok}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
         </header>
    );
}

export default Header;