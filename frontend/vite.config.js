import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    // Allow preview platform hostname
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ab505fc6-66ad-4020-a866-2d8f5f231d64.preview.emergentagent.com'
    ],
    watch: { usePolling: true, interval: 300 }
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ab505fc6-66ad-4020-a866-2d8f5f231d64.preview.emergentagent.com'
    ]
  }
})