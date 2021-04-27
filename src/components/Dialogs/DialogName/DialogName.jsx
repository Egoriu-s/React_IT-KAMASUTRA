import React from 'react';
import {NavLink} from 'react-router-dom';
import style_dialogName from './DialogName.module.css';


const DialogName = (props) => {

    // let path = '/dialogs/' + props.id;
    // let name = props.name;

    return (
        <div className={style_dialogName.name}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogName;