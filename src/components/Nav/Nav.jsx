import React from 'react';
import style_nav from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style_nav.content}>

            <div className={style_nav.item}>
                <NavLink to='/profile/' activeClassName={style_nav.active}>Profile</NavLink>
            </div>
            <div className={style_nav.item}>
                <NavLink to='/dialogs' activeClassName={style_nav.active}>Messages</NavLink>
            </div>
            <div className={style_nav.item}>
                <NavLink to='/news' activeClassName={style_nav.active}>News</NavLink>
            </div>
            <div className={style_nav.item}>
                <NavLink to='/music' activeClassName={style_nav.active}>Music</NavLink>
            </div>
            <div className={style_nav.item}>
                <NavLink to='/settings' activeClassName={style_nav.active}>Settings</NavLink>
            </div>
            <div className={style_nav.item}>
                <NavLink to='/friends' activeClassName={style_nav.active}>Friends</NavLink>
            </div>
            <div className={style_nav.item}>
                <NavLink to='/users' activeClassName={style_nav.active}>Users</NavLink>
            </div>
        </nav>
    );
};

export default Nav;