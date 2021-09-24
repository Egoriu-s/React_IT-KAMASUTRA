import style_login from "../login.module.css";
import style_form from '../../Second_files/Forms_control/formsControl.module.css'
import {reduxForm} from "redux-form";
import React from "react";
import {minLengthThunkCreator, required} from "../../Second_files/Validators/validators";
import {createField, elementFormHOC} from "../../Second_files/Forms_control/formsControl";

const minLengthPassword = minLengthThunkCreator(6);
// const maxLengthPassword = maxLengthThunkCreator(12);

const Input = elementFormHOC('input');

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={style_login.form}>
                {createField('email', 'email', Input, [required], null, null)}
                {createField('password', 'password', Input, [required, minLengthPassword], {type: 'password'}, null)}
                {createField(null, 'rememberMe', Input,
                    null, {type: 'checkbox'}, 'remember Me')}
                {/*<div>*/}
                {/*    <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me*/}
                {/*    /!*<input type={'checkbox'}/> remember me*!/*/}
                {/*</div>*/}
                {
                    error &&
                    <div className={style_form.error_summary_form}>
                        {error}
                    </div>
                }
                {/*{(props.error) ? <div className={style_form.error_summary_form}>*/}
                {/*    {props.error}*/}
                {/*</div> : null}*/}
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
};

// const LoginForm = (props) => {
//
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div className={style_login.form}>
//                 <div>
//                     <Field placeholder={'email'} name={'email'} component={Input}
//                            validate={[required]}/>
//                     {/*<input placeholder={'login'}/>*/}
//                 </div>
//                 <div>
//                     <Field placeholder={'password'} name={'password'} component={Input}
//                            type={'password'} validate={[required, minLengthPassword]}/>
//                 </div>
//                 <div>
//                     <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
//                     {/*<input type={'checkbox'}/> remember me*/}
//                 </div>
//                 {
//                     props.error &&
//                     <div className={style_form.error_summary_form}>
//                         {props.error}
//                     </div>
//                 }
//                 {/*{(props.error) ? <div className={style_form.error_summary_form}>*/}
//                 {/*    {props.error}*/}
//                 {/*</div> : null}*/}
//                 <div>
//                     <button>Submit</button>
//                 </div>
//             </div>
//         </form>
//     );
// };

export const ReduxLoginFormContainer = reduxForm({form: 'login'})(LoginForm);