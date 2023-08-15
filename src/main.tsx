/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContext from './context/AppContext'
import { Provider } from 'react-redux';
import store from './reduxToolkit/store/store';

const AppWrapper: React.FC = () => (
    <AppContext>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContext>
);
ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);