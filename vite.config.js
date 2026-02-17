import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",   // ⭐️ ESTA LINEA ARREGLA EL 404 EN VERCEL
})
