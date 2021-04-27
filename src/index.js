import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store_redux";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
            {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//                 {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// };

// rerenderEntireTree();

// store.subscribe(() => {
//     rerenderEntireTree();
// });

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });
