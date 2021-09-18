import React from 'react';
import style_form from './formsControl.module.css';
import {Field} from "redux-form";

// export const Textarea = ({input, meta, ...props}) => {
//     debugger
//     const ofMeta = meta.touched && meta.error;
//     return (
//         <div className={style_form.form_content + " " + (ofMeta && style_form.error)}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {ofMeta && <span>{meta.error}</span>}
//         </div>
//     )
// };

// export const Input = ({input, meta, ...props}) => {
//     debugger
//     const ofMeta = meta.touched && meta.error;
//     return (
//         <div className={style_form.form_content + " " + (ofMeta && style_form.error)}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {ofMeta && <span>{meta.error}</span>}
//         </div>
//     )
// };

export const ElementFormHOC = (Component) => ({input, meta, ...props}) => {
    const ofMeta = meta.touched && meta.error;
    return (
        <div className={style_form.form_content + " " + (ofMeta && style_form.error)}>
            {/*<div className={s.formControl + " " + (hasError ? s.error : "")}>*/}
            <div>
                <Component {...input} {...props} />
            </div>
            {ofMeta && <span> {meta.error} </span>}
        </div>
    );
};

export const createField = (placeholder, name, component, validator, props, text) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component}
                   validate={validator} {...props}/> {text}
        </div>
    )
}
