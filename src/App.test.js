import {render, screen} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store_redux";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
    render(<BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
