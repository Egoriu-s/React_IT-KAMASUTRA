import style_dialogs from "../Dialogs.module.css";
import {reduxForm} from "redux-form";
import {maxLengthThunkCreator, required} from "../../Second_files/Validators/validators";
import React from "react";
import {createField, elementFormHOC} from "../../Second_files/Forms_control/formsControl";

const maxLength10 = maxLengthThunkCreator(10);

const Textarea = elementFormHOC('textarea');

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style_dialogs.addMessage}>
                {createField('message', 'newMessage', Textarea, [required, maxLength10], null, null)}

                {/*<div>*/}
                {/*    <Field name={'newMessag'} placeholder={'message'} component={Textarea}*/}
                {/*           validate={[required, maxLength10]}/>*/}
                {/*</div>*/}

                <div>
                    <button>Send message</button>
                </div>
            </div>
        </form>
    )
};

export const ReduxMessageFormcontainer = reduxForm({form: 'newMessageText'})(MessageForm);