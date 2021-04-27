import React from 'react';
import style_dialogMessage from './DialogMessage.module.css';

const DialogMessage = (props) => {

    return (
        <div className={style_dialogMessage.message}>
            {props.message}
        </div>
    );
};

export default DialogMessage;