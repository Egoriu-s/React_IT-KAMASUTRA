import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsArray = [
    {id: 1, message: 'Hi, how are you?', like: '+100500'},
    {id: 2, message: 'It\'s my second post!', like: '20'},
    {id: 3, message: 'Good day!', like: '25'}
]

let dialogsArray = [
    { id: 1, name: 'Egorius' },
    { id: 2, name: 'Vika' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Kuzya' }
]

let messagesArray = [
    { id: 1, message: 'Hello, Universe!' },
    { id: 2, message: 'How old are you?' },
    { id: 3, message: 'I love React!' }
]

ReactDOM.render(
    <React.StrictMode>
        <App postsArray={postsArray} dialogsArray={dialogsArray} messagesArray={messagesArray}/>
        {/*<App postsArray={postsArray} messagesArray={messagesArray}/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
