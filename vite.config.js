import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // GitHub repo নাম
 build: {
    outDir: 'docs' // ⚠️ build output হবে docs ফোল্ডারে
  }
})
