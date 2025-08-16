import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
// BASE_PATH 환경변수가 있으면 사용, 없으면 루트
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
