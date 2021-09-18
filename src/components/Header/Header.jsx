import React from 'react';
import style_header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style_header.header}>
            <div><img src='https://webmentor.gr/wp-content/uploads/2018/11/logo300X300.png' alt=''/></div>
            <div>{props.auth.email}</div>
            <div className={style_header.login_block}>

                {props.auth.isAuth
                    ? <div>
                        <div>{props.auth.login}</div>
                        <div>
                            <button onClick={props.authlogout}>Logout</button>
                        </div>
                    </div>
                    : <NavLink to='/login/' activeClassName={style_header.active}>REGISTRATION</NavLink>}

            </div>
        </header>
    );
};

export default Header;
