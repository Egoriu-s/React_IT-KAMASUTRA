import style_posts from "../MyPosts.module.css";
import {reduxForm} from "redux-form";
import {createField, elementFormHOC} from "../../../Second_files/Forms_control/formsControl";
import React from "react";

const validate = (value) => {
    const errors = {};
    if (!value.newPost) {
        errors.newPost = 'no required value'
    } else if (value.newPost.length > 5) {
        errors.newPost = `Max length is 5 simbols`
    }
    return errors;
};

const Textarea = elementFormHOC('textarea');

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style_posts.createPost}>
                <p>My posts</p>
                {createField('new post', 'newPost', Textarea, null, {type: 'text'}, null)}

                {/*<div>*/}
                {/*    <Field component={Textarea} name={'newPost'} placeholder={'new post'}*/}
                {/*           type="text"/>*/}
                {/*</div>*/}

                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
};

export const ReduxPostFormContainer = reduxForm({form: 'newPostText', validate})(PostForm);