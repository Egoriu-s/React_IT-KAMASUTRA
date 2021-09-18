import React from 'react';
import style_login from './login.module.css';
import {ReduxLoginFormContainer} from "./Forms/LoginForm";
import {authlogin} from "../../redux/auth_reduser";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/music'}/>
    }
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = formData;
        props.authLogin(email, password, rememberMe);

    };

    return (
        <div className={style_login.content}>
            <ReduxLoginFormContainer onSubmit={onSubmit}/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

let obj_ActionCreator_ToDispatch = {
    authLogin: authlogin
}

const LoginContainer = compose(connect(mapStateToProps, obj_ActionCreator_ToDispatch))(Login);

export default LoginContainer;