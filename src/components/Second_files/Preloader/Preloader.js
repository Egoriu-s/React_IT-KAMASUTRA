import React from 'react';
import style_preloader from "./Preloader.module.css";

const Preloader = (props) => {
    return <div className={style_preloader.preloader}>
        <div className={style_preloader.spinner}></div>
    </div>
};

export default Preloader;