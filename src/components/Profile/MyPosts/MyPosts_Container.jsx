import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostStateActionCreator} from "../../../redux/profilePage_reduser";


let mapStateToProps = (state) => {
    return {
        postsArray: state.profilePage.postsArray
    }
};

let obj_ActionCreator_ToDispatch = {
    addPostState: addPostStateActionCreator
};

const MyPostsContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(MyPosts);

export default MyPostsContainer;

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPostStateContainer: () => {
//             dispatch(addPostStateActionCreator());
//         },
//         newPostStateContainer: (newPostText) => {
//             dispatch(newPostStateActionCreator(newPostText));
//         }
//     }
// };