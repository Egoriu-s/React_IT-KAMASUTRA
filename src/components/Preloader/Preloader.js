import React from 'react';
import style_users_preloader from "../users/Users_isFetching.module.css";

let Preloader = (props) => {
    return <div className={style_users_preloader.preloader}>
        <div className={style_users_preloader.spinner}></div>
    </div>
};

export default Preloader;