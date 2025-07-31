# Plantilla y dependencias

Para la creación de esta página se utiliza Reac + Vite + material-ui. Para iniciar el proyecto e instalar las dependencias:

```bash
npm create vite@latest . --template react
npm install
npm install @mui/material @emotion/react @emotion/styled react-router-dom @mui/material-icons

```

# Desarollo en local
Para el desarrollo de la página se utiliza el servicio de vite:

```bash
npm run dev
```

La página se servirá en ```http://localhost:5174/```

# Configuración de la paleta de colores

Se crea un theme en el archivo ```theme.jsx```:
```jsx
import { extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {}
    },
    "dark": {
      "palette": {}
    }
  }
})
export default theme;
```

# Despliegue en github pages

Es necesario el paquete gh-pages:

```bash
npm install gh-pages --save-dev
```

Configura el ```vite.config.js``` :
```jsx

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 cambia esto al nombre exacto del repo
})
```

Añadir a ```packages.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

Permite ejecutar el comando gh-pages -d dist para hacer el push a la ram gh-pages del repositorio de github cuando se ejecute el ```npm deploy```.


Para que funcione el route de react y permita la navegación entre los distintos menús, es necesario añadir un fallback, creando el archivo ```404.html``en ```/public/```:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=/" />
  </head>
  <body></body>
</html>
```

Realizar el push al repositorio.

Ejecutar:

```bash
npm run build
npm run deploy
```

Configurar en github:
1. Settings > Pages en tu repo.
2. En "Source", seleccionar la rama gh-pages.
3. Guardar y esperar unos minutos.

La página se actualizará en
👉 https://TU_USUARIO.github.io/