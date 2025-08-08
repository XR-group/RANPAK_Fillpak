import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    // Preview domains rotate; allow all in dev/preview. For production, switch to env allowlist.
    allowedHosts: true,
    watch: { usePolling: true, interval: 300 }
  },
  preview: { port: 3000, strictPort: true, host: true, allowedHosts: true }
})