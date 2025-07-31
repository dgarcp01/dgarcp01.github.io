import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de despliegue de la página en github pages
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 el nombre exacto de tu repo
})


