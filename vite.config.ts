import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Define __dirname for ES modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.API_KEY),
        'process.env.KEY': JSON.stringify(env.API_KEY)
      },
      resolve: {
        alias: {
          /* Fixed: Replaced the undefined __dirname with the ESM-compatible version defined above */
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

// import path from 'path';
// import { fileURLToPath } from 'url';
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// // Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig(({ mode }) => {
//   // Load env variables
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [react()],

//     // Dev server config (only for local use)
//     server: {
//       port: 3000,
//       host: true,
//     },

//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, './src'),
//       },
//     },

//     // Optional: if you really need custom global constants
//     define: {
//       __APP_ENV__: JSON.stringify(env.NODE_ENV),
//     },
//   };
// });