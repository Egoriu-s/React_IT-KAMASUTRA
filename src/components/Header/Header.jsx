
import React from 'react';
import style_header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style_header.header}>
            <div><img src='https://webmentor.gr/wp-content/uploads/2018/11/logo300X300.png' alt='' /></div>
            <div></div>
            <div className={style_header.login_block}>
                <NavLink to='/login' activeClassName={style_header.active}>REGISTRATION</NavLink>
            </div>
        </header>
    );
};

export default Header;
