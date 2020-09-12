let state = {
    messagesPage: {
        messages: [
            {id: '1', message: 'hi', sender: 0},
            {id: '2', message: 'how r u?', sender: 0},
            {id: '3', message: 'hi', sender: 1},
            {id: '4', message: 'good, how r u?', sender: 1}
        ],
        dialogs: [
            {id: '1', name: 'User 1', avatar: 'white'},
            {id: '2', name: 'User 2', avatar: 'red'},
            {id: '3', name: 'User 3', avatar: 'green'},
            {id: '4', name: 'User 4', avatar: 'black'},
            {id: '5', name: 'User 5', avatar: 'grey'}
        ],
    },
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: '3'},
            {id: '2', message: 'it\'s my first post', likesCount: '5'},
        ]
    }
};

export default state;