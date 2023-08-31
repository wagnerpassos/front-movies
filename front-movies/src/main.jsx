import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth.jsx';

import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';

import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="dark"
            />
            <Routes />
        </AuthProvider>
    </ThemeProvider>
);
