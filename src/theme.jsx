import { extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {    primary: {
                            main: '#4f46e5',
                            },
                    secondary: {
                            main: '#ec4899',
                            },}
    },
    "dark": {
      "palette": { primary: {
      main: '#e1e7ef', // Texto principal
    },
    secondary: {
      main: '#e1e7ef', // Texto secundario
    },
    background: {
      default: '#191a1f',   // Fondo primario
      paper: '#0c111c',     // Fondo secundario
    },
    text: {
      primary: '#e1e7ef',   // Texto principal
      secondary: '#e1e7ef', // Texto secundario
      disabled: '#a0aec0',  // Texto sutil
    },
    info: {
      main: '#42bdff',      // Color de acento / botones activos
    },
    success: {
      main: '#746eed',      // Color de acento secundario (violeta)
    },}
    }
  }
})
export default theme;