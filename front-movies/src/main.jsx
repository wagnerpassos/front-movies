import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth.jsx';

import GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';

import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';



ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    </ThemeProvider>
);
