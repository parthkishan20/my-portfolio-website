import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), tailwindcss(), ghPages()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})
