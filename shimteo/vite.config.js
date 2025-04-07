import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      src: path.resolve(__dirname,'src'), 
    }
  }
})

// 위에서 resolve, alias, src설정을 해주는게 django에서의 BASE_DIR과 비슷한 느낌

