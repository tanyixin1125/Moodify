import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 如果要部署到 GitHub Pages，設定 base 為 repo 名稱
export default defineConfig({
  plugins: [react()],
  base: '/Moodify/'
});