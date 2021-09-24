import React from 'react';
import style_preloader2 from "./Preloader2.module.css";

const Preloader2 = (props) => {
    return (
        <div className={style_preloader2.loader}>
            <div className={style_preloader2.loaderInner}>
                <div className={style_preloader2.loaderLineWrap}>
                    <div className={style_preloader2.loaderLine}></div>
                </div>
                <div className={style_preloader2.loaderLineWrap}>
                    <div className={style_preloader2.loaderLine}></div>
                </div>
                <div className={style_preloader2.loaderLineWrap}>
                    <div className={style_preloader2.loaderLine}></div>
                </div>
                <div className={style_preloader2.loaderLineWrap}>
                    <div className={style_preloader2.loaderLine}></div>
                </div>
                <div className={style_preloader2.loaderLineWrap}>
                    <div className={style_preloader2.loaderLine}></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader2;