import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');

if (redirect) {
  window.history.replaceState(null, '', redirect); // restaura la URL original
}


import theme from './theme'; // importa tu theme

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* normaliza estilos */}
      
        <App />
      
    </ThemeProvider>
  </React.StrictMode>
);


