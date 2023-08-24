import { defineConfig } from 'vite';
import markdownItImsize from 'markdown-it-imsize';

import markdownToResume from './core/vite-plugin';

export default defineConfig({
  base: './',
  plugins: [
    markdownToResume({
      markdown(md) {
        md.use(markdownItImsize);
      },
      pdfName: '杨文莉个人简历',
      pdfMargin: 0,
      webTitle: '杨文莉个人简历 - markdown-to-resume'
    })
  ],
  server: {
    port: 8090
  },
  build: {
    assetsDir: './'
  }
});
