import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const AuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to={'/login/'}/>

            return <Component {...this.props}/>
        }

    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth,
            messagesArray11: state.dialogsPage.messagesArray
        }
    };

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;

};