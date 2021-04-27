import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
};

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

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;

