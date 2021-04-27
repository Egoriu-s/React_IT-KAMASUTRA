import React from 'react';
import {addMessageStateActionCreator, newMessageStateActionCreator} from "../../redux/dialogsPage_reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageStateContainer: () => {
            dispatch(addMessageStateActionCreator());
        },
        newMessageStateContainer: (text) => {
            dispatch(newMessageStateActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;