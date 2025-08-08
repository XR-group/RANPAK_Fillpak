import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    watch: { usePolling: true, interval: 300 }
  },
  preview: { port: 3000, strictPort: true, host: true }
})