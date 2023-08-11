/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContext from './context/AppContext'


const AppWrapper: React.FC = () => (
    <AppContext>
        <App />
    </AppContext>
);
ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);