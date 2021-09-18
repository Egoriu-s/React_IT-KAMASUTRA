import React from 'react';
import {addMessageStateActionCreator} from "../../redux/dialogsPage_reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let obj_ActionCreator_ToDispatch = {
    addMessageState: addMessageStateActionCreator
};

const DialogsContainer = compose(connect(mapStateToProps, obj_ActionCreator_ToDispatch), AuthRedirect)(Dialogs);

export default DialogsContainer;

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessageStateContainer: () => {
//             dispatch(addMessageStateActionCreator());
//         },
//         newMessageStateContainer: (text) => {
//             dispatch(newMessageStateActionCreator(text));
//         }
//     }
// };