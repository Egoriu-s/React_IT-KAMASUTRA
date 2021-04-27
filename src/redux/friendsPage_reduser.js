let firstInitialState = {
    friendsArray: [
        {id: 1, name: 'Egorius'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Kuzya'}
    ]
};

const friendsPageReduser = (state = firstInitialState, action) => {
    return state;
};

export default friendsPageReduser;