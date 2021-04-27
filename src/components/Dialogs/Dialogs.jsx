import React from 'react';
import style_dialogs from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogsArray.map((el) => <DialogName key={el.id} name={el.name}
                                                                                id={el.id}/>);
    let messageElements = props.dialogsPage.messagesArray.map((el) => <DialogMessage key={el.message}
                                                                                     message={el.message}/>);

    let addMessageState = () => {
        props.addMessageStateContainer();
    };

    let newMessageState = (ev) => {
        let text = ev.target.value;
        props.newMessageStateContainer(text);
        console.log(text);
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
                <div className={style_dialogs.addMessage}>
                    <div>
                        <textarea onChange={newMessageState} value={props.dialogsPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessageState}>Send message</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;