import React from 'react';
import style_dialogs from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import DialogMessage from './DialogMessage/DialogMessage';
import {ReduxMessageFormcontainer} from "./Forms/MessageForm";

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogsArray.map((el) =>
        <DialogName key={el.id} name={el.name} id={el.id}/>);

    let messageElements = props.dialogsPage.messagesArray.map((el) =>
        <DialogMessage key={el.message} message={el.message}/>);

    let addMessageInRedux = (formData) => {
        props.addMessageState(formData.newMessage);
    };

    return (
        <div className={style_dialogs.content}>
            <div className={style_dialogs.column_names}>
                <div className={style_dialogs.section}>DIALOGS</div>
                {dialogElements}
            </div>
            <div className={style_dialogs.column_messages}>
                <div className={style_dialogs.section}>MESSAGES</div>
                {messageElements}
                <ReduxMessageFormcontainer onSubmit={addMessageInRedux}/>
            </div>
        </div>
    );
};

export default Dialogs;