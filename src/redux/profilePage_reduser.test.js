import profilePageReduser, {addPostStateActionCreator, deletePostStateActionCreator} from "./profilePage_reduser";

let state = {
    postsArray: [
        {id: 1, post: 'Hi, how are you?', like: '+100500'},
        {id: 2, post: 'It\'s my second post!', like: '20'},
        {id: 3, post: 'Good day!', like: '25'}
    ]
};

test('new post should be added', () => {

    let action = addPostStateActionCreator("DC/Marvel");

    let newState = profilePageReduser(state, action);

    expect(newState.postsArray.length).toBe(4);

});

it('new post message is true', () => {

    let action = addPostStateActionCreator("DC/Marvel");

    let newState = profilePageReduser(state, action);

    expect(newState.postsArray[3].post).toBe("DC/Marvel");
});

it('post message was deleted', () => {

    let action = deletePostStateActionCreator(1);

    let newState = profilePageReduser(state, action);

    expect(newState.postsArray.length).toBe(2);
});

it('post message was not deleted', () => {

    let action = deletePostStateActionCreator(1000);

    let newState = profilePageReduser(state, action);

    expect(newState.postsArray.length).toBe(3);
});