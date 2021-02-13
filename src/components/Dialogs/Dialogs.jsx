import React from 'react';
import style_dialogs from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {

    let dialogElements = props.dialogsArray.map((el) => <DialogName name={el.name} id={el.id}/>);

    let messageElements = props.messagesArray.map((el) => <DialogMessage message={el.message}/>);

    return (
        <div className={style_dialogs.content}>
            <div className={style_dialogs.column_names}>
                <div className={style_dialogs.section}>DIALOGS</div>
                {dialogElements}
            </div>
            <div className={style_dialogs.column_messages}>
                <div className={style_dialogs.section}>MESSAGES</div>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;